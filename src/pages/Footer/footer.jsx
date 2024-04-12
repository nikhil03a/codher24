import React from 'react';
import "./footer.css";

function Footer() {
  return (
		<div className="sticky" id="contact">
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col">
						</div>
						<div className="footer-col">
							<h4>Contact</h4>
							<ul>
							<li className="contactList">Arunachalam M : +91 95515 40001</li>
								<li className="contactList">Rishitha : +91 90435 02502</li>
								<li className="contactList">
									Email:
									<a
										href="mailto:codher@auceg.acm.org"
										target="blank"
										style={{ textDecoration: "none", color: "#fff", textTransform: "lowercase"}}
									>
										codher@auceg.acm.org
									</a>
								</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>Get In Touch</h4>
							<div className="social-links">
								<a href="https://www.facebook.com/acm.ceg/" target="blank">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="https://twitter.com/AcmCeg" target="blank">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="https://www.instagram.com/acmceg/" target="blank">
									<i className="fab fa-instagram"></i>
								</a>
								<a
									href="https://www.linkedin.com/company/acm-student-chapter-of-ceg/mycompany/"
									target="blank"
								>
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div>
					<hr className="dashed"></hr>
					<div className="copyright">
						<div>
							&copy;&nbsp;2024&nbsp;<strong>ACM CEG</strong>.
						</div>
						<div>&nbsp;Made with 🖤️ by TechOps, ACM CEG</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;