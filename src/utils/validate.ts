import {Theme} from "../providers";

export const validate = <T = {}>(result: (theme: Theme, args: T) => string) =>
  ({theme: them, ...arg}: { theme: Theme } & any) => {
    if (Object.keys(them).length === 0) {
      throw new Error("Not found ThemeProvider. please set.");
    }
    return result(them, arg);
  };
