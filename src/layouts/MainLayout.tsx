import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
	FaTwitter,
} from 'react-icons/fa';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsPerson, BsCodeSlash } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: 'Inicio', to: 'home', icon: BiHomeAlt2 },
		{ name: 'Sobre Mí', to: 'about', icon: BsPerson },
		{ name: 'Proyectos', to: 'projects', icon: BsCodeSlash },
		{ name: 'Contacto', to: 'contact', icon: RiContactsLine },
	];

	const socialLinks = [
		{
			name: 'GitHub',
			icon: FaGithub,
			url: 'https://github.com/MauricioGT2024',
		},
		{
			name: 'LinkedIn',
			icon: FaLinkedin,
			url: 'https://linkedin.com/in/tu-perfil',
		},
		{
			name: 'Twitter',
			icon: FaTwitter,
			url: 'https://twitter.com/tu-perfil',
		},
	];

	return (
		<div className='min-h-screen bg-primary text-textPrimary'>
			{/* Header */}
			<header
				className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                   ${
											scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : ''
										}`}
			>
				<nav className='container mx-auto px-6 py-4'>
					<div className='flex items-center justify-between'>
						{/* Logo */}
						<Link
							to='home'
							smooth={true}
							duration={500}
							className='text-2xl font-bold text-secondary cursor-pointer'
						>
							MGT
						</Link>

						{/* Desktop Navigation */}
						<div className='hidden md:flex items-center space-x-8'>
							{navLinks.map((link) => (
								<Link
									key={link.name}
									to={link.to}
									smooth={true}
									duration={500}
									spy={true}
									activeClass='text-secondary'
									offset={-100} // Añadimos offset para compensar el header
									isDynamic={true} // Mejora la precisión del scroll
									spyThrottle={100} // Reduce la frecuencia de actualización del spy
									className='flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer'
								>
									<link.icon size={20} />
									{link.name}
								</Link>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='md:hidden text-2xl focus:outline-none'
							aria-label='Toggle menu'
						>
							{isMenuOpen ? <FaTimes /> : <FaBars />}
						</button>
					</div>
				</nav>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className='md:hidden bg-tertiary'
						>
							<div className='container mx-auto px-6 py-4'>
								{navLinks.map((link) => (
									<Link
										key={link.name}
										to={link.to}
										smooth={true}
										duration={500}
										spy={true}
										offset={-100} // Añadimos offset para compensar el header
										isDynamic={true} // Mejora la precisión del scroll
										spyThrottle={100} // Reduce la frecuencia de actualización del spy
										activeClass='text-secondary'
										className='flex items-center gap-2 py-3 hover:text-secondary transition-colors cursor-pointer'
										onClick={() => setIsMenuOpen(false)}
									>
										<link.icon size={20} />
										{link.name}
									</Link>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			{/* Main Content */}
			<main className='pt-16'>{children}</main>

			{/* Footer */}
			<footer className='bg-tertiary py-8'>
				<div className='container mx-auto px-6'>
					<div className='flex flex-col items-center'>
						{/* Social Links */}
						<div className='flex space-x-6 mb-6'>
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-textSecondary hover:text-secondary transition-colors'
									aria-label={social.name}
								>
									<social.icon size={24} />
								</a>
							))}
						</div>

						{/* Copyright */}
						<p className='text-textSecondary text-sm text-center'>
							&copy; {new Date().getFullYear()} Mauricio GT. Todos los derechos
							reservados.
						</p>
					</div>
				</div>
			</footer>

			{/* Scroll to top button */}
			<AnimatePresence>
				{scrolled && (
					<motion.button
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className='fixed bottom-8 right-8 p-3 bg-secondary text-primary rounded-full 
                     shadow-lg hover:bg-secondary/80 transition-colors focus:outline-none'
						aria-label='Scroll to top'
					>
						<BiHomeAlt2 size={24} />
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MainLayout;
