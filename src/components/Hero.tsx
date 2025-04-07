import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/MauricioGT2024',
			icon: FaGithub,
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/MauricioGT2024',
			icon: FaLinkedin,
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/MauricioGT2024',
			icon: FaTwitter,
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const imageVariants = {
		hidden: { scale: 0, rotate: -180 },
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15,
			},
		},
	};

	return (
		<section id='home' className='min-h-screen flex items-center bg-primary'>
			<div className='container mx-auto px-6'>
				<motion.div
					className='grid md:grid-cols-2 gap-8 items-center'
					variants={containerVariants}
					initial='hidden'
					animate='visible'
				>
					{/* Texto y contenido */}
					<motion.div className='order-2 md:order-1'>
						<motion.p
							variants={itemVariants}
							className='text-secondary mb-4 text-lg'
						>
							¡Hola! 👋 Me llamo
						</motion.p>

						<motion.h1
							variants={itemVariants}
							className='text-5xl md:text-7xl font-bold mb-4 text-textPrimary'
						>
							Mauricio Sierra
						</motion.h1>

						<motion.h2
							variants={itemVariants}
							className='text-4xl md:text-6xl font-bold text-textSecondary mb-6'
						>
							Full Stack Developer
						</motion.h2>

						<motion.p
							variants={itemVariants}
							className='text-textSecondary text-lg mb-8 max-w-lg'
						>
							Construyo aplicaciones web excepcionales y accesibles,
							especializándome en crear experiencias digitales únicas con las
							últimas tecnologías.
						</motion.p>

						<motion.div variants={itemVariants} className='flex gap-4'>
							<a href='#projects' className='btn-primary'>
								Ver Proyectos
							</a>
							<a
								href='#contact'
								className='btn-primary bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary'
							>
								Contactar
							</a>
						</motion.div>

						<motion.div variants={itemVariants} className='flex gap-6 mt-8'>
							{socialLinks.map((link) => (
								<motion.a
									key={link.name}
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-textSecondary hover:text-secondary transition-colors duration-300'
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
								>
									<link.icon size={24} />
								</motion.a>
							))}
						</motion.div>
					</motion.div>

					{/* Imagen de perfil con animaciones */}
					<motion.div className='order-1 md:order-2 flex justify-center'>
						<motion.div variants={imageVariants} className='relative'>
							{/* Círculo decorativo animado */}
							<motion.div
								className='absolute inset-0 border-4 border-secondary rounded-full'
								animate={{
									scale: [1, 1.1, 1],
									rotate: [0, 360],
								}}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: 'linear',
								}}
							/>

							{/* Contenedor de la imagen */}
							<div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary'>
								<img
									src='/foto.png'
									alt='Mauricio GT'
									className='w-full h-full object-cover'
								/>

								{/* Overlay con efecto hover */}
								<motion.div
									className='absolute inset-0 bg-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300'
									whileHover={{
										backgroundColor: 'rgba(100, 255, 218, 0.3)',
									}}
								/>
							</div>

							{/* Elementos decorativos flotantes */}
							{[...Array(3)].map((_, index) => (
								<motion.div
									key={index}
									className='absolute w-4 h-4 bg-secondary rounded-full'
									style={{
										top: `${20 + index * 30}%`,
										left: `${80 + index * 10}%`,
									}}
									animate={{
										y: [0, 10, 0],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										delay: index * 0.2,
									}}
								/>
							))}
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
