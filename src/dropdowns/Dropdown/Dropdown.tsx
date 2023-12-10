import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {FC, MouseEventHandler, ReactNode} from "react";
import {useTheme} from "../../hooks";
import {ThemeProp} from "../../providers";

export type DropdownProps = {
  open?: boolean;
  align?: 'right' | 'left';
  items: ReactNode[];
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLUListElement>
}

export const Dropdown: FC<DropdownProps> =
  ({
     open,
     align = 'right',
     items,
     onClick = (event) => {event.stopPropagation();},
     className,
     children
   }) => {
    const theme = useTheme('normal');
    return <Wrap className={className} tabIndex={0}>
      {children}
      <ul onClick={}></ul>
      {open && <Down className="react-actors-dropdown-down" align={align} theme={theme} onClick={onClick}>
        {items.map((item, index) => <Item key={index} tabIndex={index} theme={theme}>{item}</Item>)}
      </Down>}
    </Wrap>;
  };

const Wrap = styled.div`
  position: relative;
`;

const Down = styled.ul<{ theme: ThemeProp; align: 'right' | 'left' }>(({theme: {font}, align}) => css`
  position: absolute;
  color: ${font};
  top: calc(100% + .25rem);
  ${align === 'left' ? css`right: 0;` : css`left: 0;`}
  border-radius: .25rem;
  list-style-type: none;
  max-height: 13.75rem;
  overflow-y: scroll;
  z-index: 1000;
`);

const Item = styled.li<{ theme: ThemeProp; }>(({theme: {background, border}}) => css`
  padding: .375rem .5rem;
  background-color: ${background};

  & + & {
    border-top: 1px solid ${border};
  }

  &:hover, &:focus {
    background-color: rgba(0, 0, 0, .8);
  }
`);
