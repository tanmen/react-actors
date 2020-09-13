import {Global, GlobalProps} from "@emotion/core";
import React, {FC} from "react";
import 'ress/dist/ress.min.css';

export const GlobalCss: FC<GlobalProps<any>> = ({styles}) => <Global styles={styles}/>;


