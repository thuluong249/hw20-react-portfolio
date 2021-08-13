import React from 'react';
import './styles.css';

function About() {
	return (
		<section className="bg-light about-page" id="about">
			<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 text-left">
						<h1 className="text-center mt-0 about">About Me</h1>
						<hr className="divider my-4" />
						<p className="text-white mb-0">
							Since I moved to the US from Vietnam two years ago, I have had held two part-time jobs and
							in 2021 decided to return to my studies. I completed a bachelor’s degree in Banking and
							Finance in Vietnam, but as a student now, the most interesting thing is using my second
							language, English, in class. Upon taking up my studies again, I was nervous despite having
							previously worked in accounting, but I learned a lot. Overcoming this initial challenge of
							using my second language in a field I studied before, I decided to undertake a greater
							challenge and join University of Connecticut’s Certificate in Coding Course.
							<h4 class="my-3">💻 My skills 💻 </h4>
							<li>HTML/CSS</li>
							<li>Bootstrap</li>
							<li>Javascript</li>
							<li>Node Js</li>
							<li>Express</li>
							<li>MySQL</li>
						</p>
						<div>
							{/* <a href={Resume} target="blank" className="btn btn-outline-dark about-btn" role="button"><i class="fas fa-user-circle"></i> Resume</a> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
