import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import Input from "../inputs/Input";
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

  onSelect(data: D): Promise<unknown> | unknown;

  onChange?(text: string): Promise<unknown> | unknown;
}

const SearchBox = <D extends Data = Data>({value, data, onSelect, onChange = (_text: string) => {}, mode = ModeType.Light, ...props}: Props<D>) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [dropFocus, setDropFocus] = useState(false);
  const [inputTimeout, setInputTimeout] = useState<NodeJS.Timeout | null>(null);
  const [dropTimeout, setDropTimeout] = useState<NodeJS.Timeout | null>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);
  useEffect(() => {
    onChange(text || '');
  }, [text]);

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

  return <>
    <Input
      {...props}
      value={text || ''}
      onChange={useCallback(e => setText(e.target.value), [])}
      onFocus={onInputFocus}
      onBlur={onInputBlur}
    />
    <DropdownZone>
      {(inputFocus || dropFocus) && <Drop mode={mode} onFocus={onDropFocus} onBlur={onDropBlur}>
        {data.map((datum, index) => <Item
          key={index}
          tabIndex={0}
          onClick={() => handleOnSelect(datum)}
          onKeyUp={(e) => onKeyUp(e, datum)}
        >{datum.text}</Item>)}
      </Drop>}
    </DropdownZone>
  </>;
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
