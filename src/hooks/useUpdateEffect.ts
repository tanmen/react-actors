import {DependencyList, EffectCallback, useEffect} from 'react';
import {useFirstMount} from './useFirstMount';

export const useUpdateEffect = (effect: EffectCallback, deps: DependencyList | undefined) => {
  const isFirst = useFirstMount();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  deps);
};
