import { act, renderHook, waitFor } from '../utils/test-utils';
import { useVideoDuration } from './useVideoDuration';

describe('useVideoDuration', () => {
    it('call without duration', () => {
        const { result } = renderHook(() => useVideoDuration());
        expect(result.current[0]).toBe('0:00');
    });

    it('call with correct duration', async () => {
        const { result } = renderHook(useVideoDuration);
        act(() => result.current[1](100));
        await waitFor(() => result.current[0] !== '0:00');
        expect(result.current[0]).toMatchSnapshot();
    });

    it('call with boundary duration', async () => {
        const { result, rerender } = renderHook(() => useVideoDuration());
        act(() => result.current[1](1.9999));
        await waitFor(() => expect(result.current[0]).not.toBe('0:00'));
        expect(result.current[0]).toMatchSnapshot();

        rerender();
        act(() => result.current[1](100000));
        await waitFor(() => expect(result.current[0]).not.toBe('0:00'));
        expect(result.current[0]).toMatchSnapshot();
    });
});
