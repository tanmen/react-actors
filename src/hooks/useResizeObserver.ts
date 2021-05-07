import {RefObject, useEffect} from "react";

export const useResizeObserver =
  <T extends HTMLElement>(callback: (elm: T) => unknown, target: RefObject<T>, options?: ResizeObserverOptions) => {
    useEffect(() => {
      if (!target.current) {
        return;
      }

      const observer = new ResizeObserver(() => {
        target.current && callback(target.current);
      });
      observer.observe(target.current, options);

      return () => observer.disconnect();
    }, []);
  };
