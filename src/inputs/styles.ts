import {css} from "@emotion/react";
import {SizeStyles} from "../types/SizeStyles";

export const inputStyles: SizeStyles = {
  normal: css`
    padding: .375rem .5rem;
    font-size: 1rem;
    border-radius: .25rem;
  `,
  small: css`
    padding: .25rem .25rem;
    font-size: .875rem;
    border-radius: .2rem;
  `,
  large: css`
    padding: .5rem .75rem;
    font-size: 1.25rem;
    border-radius: .3rem;
  `,
};
