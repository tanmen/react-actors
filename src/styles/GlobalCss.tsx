import {Global, GlobalProps} from "@emotion/react";
import React, {FC} from "react";

export const GlobalCss: FC<GlobalProps> = ({styles}) => <Global styles={styles}/>;


