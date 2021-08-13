import React from 'react';
import './styles.css';
function NavTabs() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
					<a className="navbar-brand" href="/">
						TL
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarsExample007"
						aria-controls="navbarsExample07"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarsExample007">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#home">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#project">
									Project
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default NavTabs;
