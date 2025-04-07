import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			y: [0, 10, 0],
			transition: {
				duration: 1.5,
				repeat: Infinity,
				ease: 'easeInOut',
			},
		});
	}, [controls]);

	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	return (
		<div className='overflow-hidden'>
			{/* Hero Section */}
			<section id='home' className='min-h-screen flex items-center relative'>
				<Hero />
				{/* Scroll Down Indicator */}
				<motion.div
					className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
					animate={controls}
				>
					<Link
						to='about'
						smooth={true}
						duration={500}
						className='cursor-pointer flex flex-col items-center text-secondary'
					>
						<span className='text-sm mb-2'>Scroll Down</span>
						<FaChevronDown size={20} />
					</Link>
				</motion.div>
			</section>

			{/* About Section */}
			<motion.section
				id='about'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={fadeInUp}
				className='py-20'
			>
				<About />
			</motion.section>

			{/* Skills Section */}
			<motion.section
				id='skills'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={fadeInUp}
				className='py-20 bg-tertiary'
			>
				<Skills />
			</motion.section>

			{/* Projects Section */}
			<motion.section
				id='projects'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={fadeInUp}
				className='py-20'
			>
				<Projects />
			</motion.section>

			{/* Contact Section */}
			<motion.section
				id='contact'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={fadeInUp}
				className='py-20 bg-tertiary'
			>
				<Contact />
			</motion.section>
		</div>
	);
};

export default Home;
