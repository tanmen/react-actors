import {renderHook} from '@testing-library/react-hooks';
import {DependencyList, EffectCallback} from "react";
import {useUpdateEffect} from "../useUpdateEffect";

it('should be effect only update', () => {
  const mockEffect = jest.fn();
  const {rerender} = renderHook<[effect: EffectCallback, deps: DependencyList | undefined], void>(
    ([effect, deps]) => useUpdateEffect(effect, deps))
  rerender([() => mockEffect(), [1]]);
  expect(mockEffect).toBeCalledTimes(0);
  rerender([() => mockEffect(), [2]]);
  expect(mockEffect).toBeCalledTimes(1);
  rerender([() => mockEffect(), [2]]);
  expect(mockEffect).toBeCalledTimes(1);
  rerender([() => mockEffect(), [3]]);
  expect(mockEffect).toBeCalledTimes(2);
});
