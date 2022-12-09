import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';
import Snowfall from 'react-snowfall';

import snowLogo from './assets/snow.png'
const snowFlake = document.createElement('img')
snowFlake.src = snowLogo

const images = [snowFlake]

const App = () => {
	return (
		<>
			
			<Header />
			<main className='main'>
				<Home />
				<About />
				<Skills />
				<Services />
				<Qualification />
				<Work />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
			<ScrollUp />
			<Snowfall 
				style={{
					position: 'fixed',
					width: '100vw',
					height: '100vh',
					zIndex: '-1'
				}}
				snowflakeCount={80}
				radius={[10, 20]}
				speed={[0.5, 2.5]}
				wind={[-0.5, 2]}
				images={images}
				rotationSpeed={[-1, 1]}
			/>
		</>
	);
}

export default App;
