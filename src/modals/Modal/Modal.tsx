import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {FC, ReactNode} from "react";
import {Button, ButtonProps} from "../../buttons/Button";
import {useTheme} from "../../hooks/useTheme";
import {ThemeProp} from "../../providers/ThemeProvider";

export type ModalProps = {
  title?: ReactNode;
  text: ReactNode;
  actions?: ({ text: string } & ButtonProps)[]
  onClose: () => void
}

export const Modal: FC<ModalProps> = ({title, text, actions, onClose}) => {
  const theme = useTheme('normal');
  return <Wrapper theme={theme}>
    {title && <Title theme={theme}>{title}</Title>}
    <Content>
      {text}
    </Content>
    {actions && <ActionContent>
      {actions.map(({text, onClick, ...props}) =>
        <Button
          key={text}
          onClick={async e => {
            e.preventDefault();
            await onClick?.(e);
            setTimeout(() => { onClose();}, 100)
          }} {...props}>{text}</Button>)}
    </ActionContent>}
  </Wrapper>;
};

const Wrapper = styled.div<{ theme: ThemeProp; }>(({theme: {font, background, border}}) => css`
  color: ${font};
  background-color: ${background};
  border: 1px solid ${border};
  font-weight: 700;
  word-break: keep-all;
  border-radius: .25rem;
`);

const Title = styled.h2<{ theme: ThemeProp }>(({theme: {border}}) => css`
  border-bottom: 1px solid ${border};
  padding: .375rem .75rem;
`);

const Content = styled.pre`
  padding: .375rem .75rem;
  min-height: 4rem;
`;

const ActionContent = styled.div`
  display: flex;
  justify-content: center;
  gap: .75rem;
  padding: .75rem;
`;
