import { memo, React, useEffect, useRef, useState } from "react";
export const LoadingIndicator = memo(({ LoadingState }) => {
	let intervalRef = useRef(null);
	const [progress, setProgress] = useState(0);
	const [display, setDisplay] = useState("block");
	const timeOutRef = useRef(null);
	const childTimeOutRef = useRef(null);
	useEffect(() => {
		if (LoadingState) {
			intervalRef.current = setInterval(() => {
				setProgress((prev) => Math.min(prev + Math.random() * 10, 90));
			}, 100);
		} else {
			if (intervalRef.current !== null) {
				setProgress(100);
				clearInterval(intervalRef.current);
				timeOutRef.current = setTimeout(() => {
					setDisplay("none");
					childTimeOutRef.current = setTimeout(() => {
						setProgress(0);
						setDisplay("block");
					}, 100);
				}, 100);
			}
		}
		return () => {
			clearInterval(intervalRef.current);
			clearTimeout(timeOutRef.current);
			clearTimeout(childTimeOutRef.current);
		};
	}, [LoadingState]);
	return (
		<div
			style={{
				display: `${display}`,
				width: `${progress}%`,
				/* transitionProperty: "width",
				transitionDuration: "0.1s", */
			}}
			className="loadin--state"
		></div>
	);
});
