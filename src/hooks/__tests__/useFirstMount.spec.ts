import {renderHook} from '@testing-library/react-hooks';
import {useFirstMount} from "../useFirstMount";

it('should be only first trust', () => {
  const {result, rerender} = renderHook(() => useFirstMount())
  expect(result.current).toBe(true);
  rerender();
  expect(result.current).toBe(false);
  rerender();
  expect(result.current).toBe(false);
});
