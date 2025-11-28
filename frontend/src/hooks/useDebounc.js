import { useCallback, useRef } from "react";
export const useDebounc = (callBack, delay) => {
	let debRef = useRef(null);
	const debounc = useCallback(
		(...args) => {
			clearTimeout(debRef.current);
			debRef.current = setTimeout(() => {
				callBack(...args);
			}, delay);
		},
		[callBack, delay]
	);
	return debounc;
};
