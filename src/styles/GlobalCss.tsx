import {Global, GlobalProps} from "@emotion/react";
import React, {FC} from "react";
import 'ress/dist/ress.min.css';

export const GlobalCss: FC<GlobalProps> = ({styles}) => <Global styles={styles}/>;


