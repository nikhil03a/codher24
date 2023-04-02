import React from 'react';
import "./sponsors.css";

function Sponsors() {
  return (
		<>
			<div className="sponsors_container" id="sponsors">
				<div className="Sponsorstitle">
					<span>SPONSORS</span>
				</div>
				<div className="sponsors">
					<div className="titleSponsor">
						<h2 style={{ color: "white", paddingBottom: "1.2rem" }}>
							Title Sponsor
						</h2>
						<a
							href="https://motorq.com/"
							target={"blank"}
							style={{ textDecoration: "none" }}
						>
							<img
								src="assets/motorq-logo.png"
								style={{ width: "275px", height: "70px", borderRadius: "10px" }}
							></img>
						</a>
					</div>
					<div className="other_sponsors">
						<div style={{ paddingBottom: "1rem" }}>
							<h2 style={{ color: "white", paddingBottom: "1rem" }}>
								Associate Sponsor
							</h2>
							<a
								href="https://github.com/"
								target={"blank"}
								style={{ textDecoration: "none" }}
							>
								<img
									src="assets/GitHub_Logo_White.png"
									alt="Github"
									style={{
										width: "250px",
										height: "100px",
										borderRadius: "10px",
									}}
								></img>
							</a>
						</div>
						<div style={{ marginBottom: "20px" }}>
							<h2 style={{ color: "white", paddingBottom: "1rem" }}>
								Intern Partner
							</h2>
							<a
								href="https://redink.app/"
								target={"blank"}
								style={{ textDecoration: "none" }}
							>
								<img
									src="assets/RedInkLogo.jpeg"
									alt="Redink"
									style={{
										width: "250px",
										height: "80px",
										borderRadius: "10px",
									}}
								></img>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="sponsors_container">
				<div className="Sponsorstitle">
					<span>COMMUNITY SPONSORS</span>
				</div>
				<div className="community_sponsors">
					<div className="community-row">
						<a
							href="https://www.cb.mitindia.edu/"
							target={"blank"}
							style={{ textDecoration: "none" }}
						>
							<img
								src="assets/csmit.png"
								alt="csmit"
								style={{
									width: "300px",
									height: "150px",
									borderRadius: "10px",
								}}
							></img>
						</a>
						<a
							href="https://csau.in/"
							target={"blank"}
							style={{ textDecoration: "none" }}
						>
							<img
								src="assets/csau.jpg"
								alt="csau"
								style={{
									width: "250px",
									height: "150px",
									borderRadius: "20px",
								}}
							></img>
						</a>
						<a
							href="https://www.communityofcoders.in/"
							target={"blank"}
							style={{ textDecoration: "none" }}
						>
							<img
								src="assets/communityOfCoders.jpeg"
								alt="Community Of Coders"
								style={{
									width: "350px",
									height: "100px",
									borderRadius: "20px",
								}}
							></img>
						</a>
					</div>
					<div className="community-row">
						<a
							href="https://www.ssnw.hosting.acm.org/"
							target={"blank"}
							style={{ textDecoration: "none" }}
						>
							<img
								src="assets/acm-w_logo.png"
								alt="ssn-acm-w"
								style={{
									width: "180px",
									height: "180px",
									borderRadius: "10px",
								}}
							></img>
						</a>
						<a
							href="https://acmnitt.in/"
							target={"blank"}
							style={{ textDecoration: "none" }}
						>
							<img
								src="assets/nitt.png"
								alt="acm-nitt"
								style={{
									width: "180px",
									height: "180px",
									borderRadius: "10px",
								}}
							></img>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sponsors;