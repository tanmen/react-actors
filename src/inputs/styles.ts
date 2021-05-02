import {css} from "@emotion/react";
import {SizeStyles} from "../types/SizeStyles";

export const inputStyles: SizeStyles = {
  normal: css`
      height: calc(1rem + .75rem + 2px);
      padding: .375rem .5rem;
      font-size: 1rem;
      border-radius: .25rem;
    `,
  small: css`
      height: calc(.875rem + .50rem + 2px);
      padding: .25rem .25rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
    `,
  large: css`
      height: calc(1.25rem + 1rem + 2px);
      padding: .5rem .75rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: .3rem;
    `,
};
