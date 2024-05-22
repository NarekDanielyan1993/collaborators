import { useEffect, useRef } from 'react';

export function useDebounce<Func extends CallbackFunctionType>(
    func: Func,
    delay = 1000
) {
    const timer = useRef<TimerType>();

    useEffect(
        () => () => {
            if (!timer.current) {
                return;
            }
            clearTimeout(timer.current);
        },
        []
    );

    const debouncedFunction = ((...args) => {
        const newTimer = setTimeout(() => {
            func(...args);
        }, delay);
        clearTimeout(timer.current);
        timer.current = newTimer;
    }) as Func;

    return debouncedFunction;
}
