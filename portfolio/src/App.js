import React from 'react';
// import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';
import NabTab from './components/NabTab/NavTabs';
import About from './components/About/About';
import Home from './components/Home/Home';
import Project from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
			<NabTab />
			{/* <PortfolioContainer /> */}
			<Home />
			<About />
			<Project />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
