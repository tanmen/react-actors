import {SyntheticEvent} from "react";

export const handleEvent = (callback: (event?: SyntheticEvent) => unknown) =>
  (event: SyntheticEvent) => {
    event.stopPropagation();
    event.preventDefault();
    callback(event);
  }
