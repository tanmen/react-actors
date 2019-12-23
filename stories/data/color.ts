import {select} from "@storybook/addon-knobs";
import {ColorType} from "../../src/types/ColorType";

export const color = () => select('color', {
  Primary: ColorType.Primary,
  Secondary: ColorType.Secondary,
  Success: ColorType.Success,
  Danger: ColorType.Danger,
  Warning: ColorType.Warning,
  Info: ColorType.Info
}, ColorType.Primary);
