import React from 'react';
import Project1 from './images/Project1.png';
import Project2 from './images/project2.png';
import Workout from './images/workout-tracker.png';
// import teamgenerate from "/images/teamgenerated.png";

function Projects() {
	return (
		<section id="project">
			<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
			<h1 className="text-center text-white mt-5">Projects</h1>
			{/* <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5"> */}
			<div className="card">
				<div className="card-body">
					<p>
						{' '}
						These are the 3 projects that I have done and Will do until the end of my course. The first one
						My Classmate and I have builded after Finished 1/3 of the course. And, the second project I have
						work with my group to build the app after 2/3 of the course.{' '}
					</p>
				</div>
			</div>
			{/* </div> */}
			<div class="card">
				<h2 className="text-center mt-5">Project 1-Priateship</h2>
				<p class="card-text">
					This project is the simple game about battleship. The first project after 7 weeks of studying
					coding. And, we named it The Priateship. It's a simple game of finding all the ships hidden in the
					grid. We builded from scratch and added HTML, CSS APIs and Javascript.
				</p>
				<img src={Project1} className="card-img-top" alt="Project 1-Priateship" />
				<div class="card-body">
					<a href="https://katherineyoguez.github.io/battleshipproject/" class="btn btn-primary">
						Play Game
					</a>
				</div>
			</div>
			<div class="card">
				<h2 className="text-center mt-5">Project 2-Commic Chum</h2>
				<p class="card-text">
					This is a project that I have worked with my team to builded an app about commic books. You can
					create an acc, login and read any commic books you like.
				</p>
				<img src={Project2} className="card-img-top" alt="Project 2-Comic Chum" />
				<div class="card-body">
					<a href="https://stormy-brushlands-54059.herokuapp.com/" class="btn btn-primary">
						Go to Application
					</a>
				</div>
			</div>
			<div class="card">
				<h2 className="text-center mt-5">Workout-Tracker</h2>
				<p class="card-text">
					Fitness Tracker is an app workout that help you planning and tracking your routine exercise
					everyday. It has been builded with Javascript, Express Js and MongoDb. You can create resistance and
					cardio workouts. On the dashboard page, it shows the last few days of total workout time along with
					the total weight for each day in that period.
				</p>
				<img src={Workout} className="card-img-top" alt="workout-tracker" />
				<div class="card-body">
					<a href="https://https://exercise-trackerltt.herokuapp.com/" class="btn btn-primary">
						Go to Application
					</a>
				</div>
			</div>.
		</section>
	);
}
export default Projects;
