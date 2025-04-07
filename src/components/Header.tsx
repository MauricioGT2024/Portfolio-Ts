import { useState } from 'react';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ name: 'Inicio', to: 'home' },
		{ name: 'Sobre mi', to: 'about' },
		{ name: 'Proyectos', to: 'projects' },
		{ name: 'Hablidades', to: 'skills' },
		{ name: 'Contacto', to: 'contact' },
	];

	return (
		<header className='fixed w-full bg-primary/90 backdrop-blur-sm z-50'>
			<nav className='container mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<div className='text-2xl font-bold text-secondary'>Portfolio</div>

					{/* Navegacion de Excritorio */}
					<div className='hidden md:flex space-x-8'>
						{navItems.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								smooth={true}
								duration={500}
								className='nav-link'
								spy={true}
								activeClass='text-secondary'
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Boton de Navegacion Mobile */}
					<button
						className='md:hidden text-textPrimary hover:text-secondary transition-colors'
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
					>
						{isOpen ? (
							<XIcon className='h-6 w-6' />
						) : (
							<MenuIcon className='h-6 w-6' />
						)}
					</button>
				</div>

				{/* Navegacion de Mobile */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.2 }}
							className='md:hidden absolute left-0 right-0 top-[72px] bg-tertiary shadow-lg'
						>
							<div className='px-4 py-2'>
								{navItems.map((item) => (
									<Link
										key={item.to}
										to={item.to}
										smooth={true}
										duration={500}
										className='block py-3 px-4 text-lg text-textSecondary hover:text-secondary transition-colors cursor-pointer border-b border-primary/10 last:border-none'
										activeClass='text-secondary'
										spy={true}
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
};

export default Header;
