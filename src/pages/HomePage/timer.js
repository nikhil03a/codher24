import React, { useEffect, useState, useCallback } from 'react';
import "../CodherPage/codher.css";

function Timer() {
  const [width, setWidth] = useState(window.innerWidth);
	const [view, setView] = useState(false);

	const changeView = useCallback(() => {
		setWidth(window.innerWidth);
		if(width <= 450) {
			setView(true);
		} else {
			setView(false);
		}
	});

	useEffect(() => {
		changeView();
	}, []);

	useEffect(() => {
		const script = document.createElement("script");
	
		script.src = "https://cdn.logwork.com/widget/countdown.js";
		document.body.appendChild(script);
		return () => {
		  document.body.removeChild(script);
		}
	  }, []);
	
	window.addEventListener("resize", changeView);
  
  return (
		<div className="container">
			<div className="timer">
				{view ? (
					<a
						href="https://logwork.com/countdown-yf59"
						className="countdown-timer"
						data-style="flip2"
						data-width="451"
						data-timezone="Asia/Kolkata"
						data-textcolor="#cccccc"
						data-date="2024-03-07 19:00"
						data-background="#ab43f0"
						data-digitscolor="#ffffff"
						data-unitscolor="#cccccc"
					>
						CODHER Starts In
					</a>
				) : (
					<a
						href="https://logwork.com/countdown-yg25"
						className="countdown-timer"
						data-style="flip2"
						data-width="649"
						data-timezone="Asia/Kolkata"
						data-textcolor="#cccccc"
						data-date="2024-03-07 19:00"
						data-background="#ab43f0"
						data-digitscolor="#ffffff"
						data-unitscolor="#cccccc"
					>
						CODHER Starts In
					</a>
				)}
			</div>
		</div>
	);
}

export default Timer;
