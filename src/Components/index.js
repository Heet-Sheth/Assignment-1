import React, { useEffect, useState } from "react";

export default function ScreenSize() {
	const [windowSize, setSize] = useState([0, 0]);
	useEffect(() => {
		function changeSize() {
			setSize([window.innerHeight, window.innerWidth]);
		}
		window.addEventListener("resize", changeSize);
		return () => window.removeEventListener("resize", changeSize);
	}, []);
	return (
		<div>
			<p>{windowSize[0] + "," + windowSize[1]}</p>
		</div>
	);
}
