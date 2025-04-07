import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Gracias from './pages/Gracias';
import Skills from './components/Skills';

function App() {
	return (
		<div className='bg-primary'>
			<Header />
			<main>
				<Hero />
				<About />
				<Projects />
				<Skills/>
				<Contact />
				<Routes>
					<Route path='/gracias' element={<Gracias />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
