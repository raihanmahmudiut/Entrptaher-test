import React, { useEffect } from "react";
import "./Overlay.css"; // Import your styling for the overlay here

function Overlay() {
	useEffect(() => {
		const pixels = document.getElementsByClassName("pixel");

		for (let i = 0; i < pixels.length; i++) {
			// Generate a random delay between 5 seconds (5000ms) and 30 seconds (30000ms)
			const randomDelay = Math.random() * 10000; // Random delay between 5s and 30s
			pixels[i].style.animationDelay = `${randomDelay}ms`;
		}
	}, []);

	return (
		<div className="sidePanel">
			<div className="pixelCon">
				{/* Render your "pixel" elements here */}
				{Array.from({ length: 5000 }, (_, i) => (
					<div className="pixel" key={i}></div>
				))}
			</div>
		</div>
	);
}

export default Overlay;
