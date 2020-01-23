import React, {useCallback, useState} from "react";
import styled from "styled-components";
import Input from "../inputs/Input";
import CircleLoading from "../loadings/CircleLoading";
import {ModeType} from "../types/ModeType";
import {validate} from "../utils/validater";

interface Data {
  text: string;
}

interface ThemeProps {
  mode?: ModeType;
}

export interface Props<D extends Data> extends ThemeProps {
  value?: string;
  data: D[];
  defaultValue?: string;

  onSelect(data: D): Promise<unknown> | unknown;

  onChange?(text: string): Promise<unknown> | unknown;
}

const SearchBox = <D extends Data = Data>({value = '', data, defaultValue, onSelect, onChange = (_text: string) => {}, mode = ModeType.Light, ...props}: Props<D>) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [dropFocus, setDropFocus] = useState(false);
  const [inputTimeout, setInputTimeout] = useState<NodeJS.Timeout | null>(null);
  const [dropTimeout, setDropTimeout] = useState<NodeJS.Timeout | null>(null);

  const onInputFocus = useCallback(() => {
    setInputFocus(true);
    inputTimeout && clearTimeout(inputTimeout);
  }, [inputTimeout]);
  const onInputBlur = useCallback(() => setInputTimeout(setTimeout(() => setInputFocus(false), 10)), []);
  const onDropFocus = useCallback(() => {
    setDropFocus(true);
    dropTimeout && clearTimeout(dropTimeout);
  }, [dropTimeout]);
  const onDropBlur = useCallback(() => setDropTimeout(setTimeout(() => setDropFocus(false), 10)), []);
  const handleOnSelect = useCallback((datum) => {
    setDropFocus(false);
    onSelect(datum);
  }, [onSelect]);
  const onKeyUp = useCallback((event, datum) => [13, 32].includes(event.keyCode) && handleOnSelect(datum),
    [handleOnSelect]);

  return <div {...props}>
    <Input
      value={value || ''}
      onChange={useCallback(e => onChange(e.target.value), [onChange])}
      onFocus={onInputFocus}
      onBlur={onInputBlur}
    />
    <DropdownZone>
      {(inputFocus || dropFocus) && <Drop mode={mode} onFocus={onDropFocus} onBlur={onDropBlur}>
        {data.length ? data.map((datum, index) => <Item
          key={index}
          tabIndex={0}
          onClick={() => handleOnSelect(datum)}
          onKeyUp={(e) => onKeyUp(e, datum)}
        >{datum.text}</Item>) : <Loading><CircleLoading style={{width: '1em'}}/></Loading>}
      </Drop>}
    </DropdownZone>
  </div>;
};

export default SearchBox;

const DropdownZone = styled.div`
position: relative;
`;

const Drop = styled.div<ThemeProps>`
position: absolute;
right: 0;
left: 0;
z-index: 1000;
margin: .125rem 0;
padding: .5rem .5rem;
border: 1px solid ${validate<Required<ThemeProps>>((theme, {mode}) => theme.mode[mode].border)};
border-radius: .25rem;
background-color: ${validate<Required<ThemeProps>>((theme, {mode}) => theme.mode[mode].background)};
`;

const Item = styled.a`
display: block;
padding: .25rem .25rem;
`;

const Loading = styled.div`
display: flex;
justify-content: center;
`;
