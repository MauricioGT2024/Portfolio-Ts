import { motion } from 'framer-motion';
import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaHeart,
	FaEnvelope,
	FaMapMarkerAlt,
	FaCode,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
	const currentYear = new Date().getFullYear();

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

	const footerLinks = [
		{ name: 'Inicio', to: 'home' },
		{ name: 'Sobre Mí', to: 'about' },
		{ name: 'Proyectos', to: 'projects' },
		{ name: 'Contacto', to: 'contact' },
	];

	const footerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<footer className='bg-tertiary pt-12 pb-6'>
			<div className='container mx-auto px-6'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={footerVariants}
					className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'
				>
					{/* Columna 1: Información de contacto */}
					<motion.div variants={itemVariants} className='space-y-4'>
						<h3 className='text-xl font-bold mb-4 text-secondary'>Contacto</h3>
						<div className='flex items-center space-x-2 text-textSecondary hover:text-secondary transition-colors'>
							<FaEnvelope />
							<a href='mailto:senasilvana192@gmail.com'>senasilvana192@gmail.com</a>
						</div>
						<div className='flex items-center space-x-2 text-textSecondary'>
							<FaMapMarkerAlt />
							<span>Catamarca, Argentina</span>
						</div>
					</motion.div>

					{/* Columna 2: Enlaces de navegación */}
					<motion.div variants={itemVariants} className='space-y-4'>
						<h3 className='text-xl font-bold mb-4 text-secondary'>
							Navegación
						</h3>
						<ul className='space-y-2'>
							{footerLinks.map((link) => (
								<li key={link.name}>
									<Link
										to={link.to}
										smooth={true}
										duration={500}
										className='text-textSecondary hover:text-secondary transition-colors cursor-pointer'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Columna 3: Redes sociales */}
					<motion.div variants={itemVariants} className='space-y-4'>
						<h3 className='text-xl font-bold mb-4 text-secondary'>Sígueme</h3>
						<div className='flex space-x-4'>
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
					</motion.div>
				</motion.div>

				{/* Línea divisoria */}
				<motion.div
					variants={itemVariants}
					className='border-t border-textSecondary/20 my-8'
				/>

				{/* Footer bottom */}
				<motion.div
					variants={itemVariants}
					className='flex flex-col md:flex-row justify-between items-center text-sm text-textSecondary'
				>
					<div className='flex items-center mb-4 md:mb-0'>
						<span>
							© {currentYear} Mauricio GT. Todos los derechos reservados.
						</span>
					</div>

					<motion.div
						className='flex items-center space-x-2'
						whileHover={{ scale: 1.05 }}
					>
						<span>Hecho con</span>
						<FaHeart className='text-red-500' />
						<span>y</span>
						<FaCode className='text-secondary' />
					</motion.div>
				</motion.div>

				{/* Tech stack */}
				<motion.div
					variants={itemVariants}
					className='mt-4 text-center text-xs text-textSecondary/60'
				>
					<p>
						Desarrollado con React + TypeScript + Tailwind CSS + Framer Motion
					</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
