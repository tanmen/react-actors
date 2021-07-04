import {SyntheticEvent} from "react";

export const handleEvent = (callback: (event?: SyntheticEvent) => {}) =>
  (event: SyntheticEvent) => {
    event.stopPropagation();
    event.preventDefault();
    callback(event);
  }
