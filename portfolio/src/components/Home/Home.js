import React from 'react';
import './styles.css';

function Home() {
	return (
		<section class="banner">
			<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
			<header className="introduce" id="jumbotron">
				<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
				<div className="container h-100">
					<div className="row h-100 align-items-left justify-content-center text-center">
						<div class="textBx w50 animate__animated animate__rotateIn">
							<h4>Hello, My name is</h4>
							<h1>
								<span>Thu Luong</span>
							</h1>
							<h3>Full Stack Web Developer</h3>

							<div className="col-lg-6 container h-100">
								<a href="#project" id="projectBtn" class="btn btn-lg btn-dark btn-outline-light">
									Projects
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</section>
	);
}
export default Home;
