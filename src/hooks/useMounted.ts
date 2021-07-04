import {useEffect, useRef} from 'react';

export const useMounted = () => {
  const mounted = useRef(true);

  useEffect(() =>
    () => {
      mounted.current = true;
    },
  []);

  return mounted;
};
