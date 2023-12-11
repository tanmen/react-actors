import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {FC, MouseEventHandler, ReactNode, useEffect, useRef} from "react";
import {useTheme} from "../../hooks";
import {ThemeProp} from "../../providers";

export type DropdownProps = {
  open?: boolean;
  align?: 'right' | 'left';
  items: ReactNode[];
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLUListElement>
  onBlur?: (event: MouseEvent) => Promise<unknown> | unknown
}

export const Dropdown: FC<DropdownProps> =
  ({
     open,
     align = 'right',
     items,
     onClick,
     onBlur,
     className,
     children
   }) => {
    const theme = useTheme('normal');
    const downTheme = useTheme('secondary');
    const ref = useRef(null);

    useEffect(() => {
      const blur = (event: MouseEvent) => onBlur?.(event);
      document.addEventListener("click", blur);
      return () => {
        document.removeEventListener("click", blur);
      };
    }, []);

    return <Wrap className={className} tabIndex={0} onClick={e => e.stopPropagation()}>
      {children}
      {open && <Down ref={ref} className="react-actors-dropdown-down" align={align} theme={theme} onClick={e => {
        e.stopPropagation();
        return onClick?.(e);
      }}>
        {items.map((item, index) => <Item key={index} tabIndex={index} theme={downTheme}>{item}</Item>)}
      </Down>}
    </Wrap>;
  };

const Wrap = styled.div`
  position: relative;
`;

const Down = styled.ul<{ theme: ThemeProp; align: 'right' | 'left' }>(({theme: {font, background}, align}) => css`
  position: absolute;
  color: ${font};
  top: calc(100% + .25rem);
  ${align === 'left' ? css`right: 0;` : css`left: 0;`}
  border-radius: .25rem;
  list-style-type: none;
  max-height: 13.75rem;
  overflow-y: scroll;
  z-index: 1000;
  background-color: ${background};
`);

const Item = styled.li<{ theme: ThemeProp; }>(({theme: {background, border}}) => css`
  padding: .375rem .5rem;

  & + & {
    border-top: 1px solid ${border};
  }

  &:hover, &:focus {
    background-color: ${background};
  }
`);
