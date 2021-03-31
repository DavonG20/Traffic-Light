import React, { useCallback, useState } from "react";
export function Home() {
	const [color, setColor] = useState(null);
	return (
		<div className="text-center-mt-5">
			<div id="trafficlight"></div>
			<div id="container">
				<div
					id="redlight"
					className={color == "red" ? "redlight active" : "redlight"}
					onMouseOver={e => setColor("red")}></div>
				<div
					id="yellowlight"
					className={
						color == "yellow" ? "yellowlight active" : "yellowlight"
					}
					onMouseOver={e => setColor("yellow")}></div>
				<div
					id="greenlight"
					className={
						color == "green" ? "greenlight active" : "greenlight"
					}
					onMouseOver={e => setColor("green")}></div>
			</div>
		</div>
	);
}
