import {useRef} from 'react';

export const useFirstMount = (): boolean => {
  const first = useRef(true);

  if (first.current) {
    first.current = false;

    return true;
  }

  return first.current;
};
