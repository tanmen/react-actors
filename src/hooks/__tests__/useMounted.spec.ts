import {renderHook} from '@testing-library/react-hooks';
import {useMounted} from "../useMounted";

it('should be only mounted', () => {
  const {result, unmount, rerender} = renderHook(() => useMounted())
  expect(result.current.current).toBe(true);
  rerender();
  expect(result.current.current).toBe(true);
  unmount();
  expect(result.current.current).toBe(false);
});
