import {useEffect, useRef} from 'react';

export const useMounted = () => {
  const mounted = useRef(true);

  useEffect(() =>
    () => {
      mounted.current = false;
    },
  []);

  return mounted;
};
