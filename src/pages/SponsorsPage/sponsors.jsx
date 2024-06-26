import React from 'react';
import "./sponsors.css";

function Sponsors() {
  return (
		<>
		<div className="sponsors_container" id="sponsors">
			<h2 class="glitch layers" data-text="Sponsors"><span>Sponsors</span></h2>
			<div className="sponsor_card">
				<img src="/assets/motorq.png" alt="Motorq" className='sponsor_img'/>
				<h3>Title Sponsor - Motorq</h3>
			</div>
			<div className="sponsor_card">
				<img src="/assets/H2S.svg" alt="H2S" className='sponsor_img'/>
				<h3>Platform Sponsor- Hack2Skill</h3>
			</div>
		</div>
		</>
	);
}

export default Sponsors;