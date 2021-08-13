import React from 'react';
import './styles.css';

function Contact() {
	return (
		<section className="bg-light about-page" id="contact">
			<div class="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 text-center">
						<h1 className="text-black text-center mb-5 contact">Contact Infomation</h1>
						<h5 className="text-black text-center mb-5 contact">
							Please leave a message, I will get back to you a soon as possible!
						</h5>
					</div>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						Name
					</label>
					<input
						type="email"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="type your name here"
					/>
				</div>

				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						Email address
					</label>
					<input
						type="email"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="type your email address here"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">
						Messages
					</label>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" />
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary">
						Submit
					</button>
				</div>
			</div>
		</section>
	);
}

export default Contact;
