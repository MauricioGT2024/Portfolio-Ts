import { motion } from 'framer-motion';

const About = () => {
	const skillsList = ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express'];

	return (
		<section id='about' className='py-20 bg-primary'>
			<div className='container mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='grid md:grid-cols-2 gap-12 items-center'
				>
					{/* Contenido de texto */}
						<div className="relative z-10">
							<motion.div 
								className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg blur"
								animate={{ opacity: [0.5, 0.8, 0.5] }}
								transition={{ duration: 3, repeat: Infinity }}
							/>
							<motion.h2 
								className='text-3xl font-bold text-textPrimary mb-6'
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
							>
								Sobre mi
							</motion.h2>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								<p className='text-textSecondary mb-6 text-lg leading-relaxed'>
									Soy un desarrollador Full Stack apasionado por crear soluciones
									web innovadoras y eficientes. Con experiencia en tecnologías
									modernas como React, TypeScript y Node.js, me especializo en
									construir aplicaciones web escalables y mantenibles.
								</p>
								<p className='text-textSecondary mb-6 text-lg leading-relaxed'>
									Mi objetivo es combinar diseño y funcionalidad para crear
									experiencias digitales excepcionales que resuelvan problemas
									reales.
								</p>

								{/* Lista de tecnologías */}
								<div className='mb-8'>
									<h3 className='text-textPrimary mb-4 text-xl font-semibold'>
										Tecnologías principales:
									</h3>
									<ul className='grid grid-cols-2 gap-2'>
										{skillsList.map((skill, index) => (
											<motion.li
												key={skill}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.1 * index }}
												className='flex items-center text-textSecondary'
											>
												<span className='text-secondary mr-2'>▹</span>
												{skill}
											</motion.li>
										))}
									</ul>
								</div>

								<div className='flex flex-wrap gap-4'>
									<motion.a
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										href='/Curriculum Vitae.pdf'
										className='btn-primary'
										target='_blank'
										rel='noopener noreferrer'
									>
										Descargar CV
									</motion.a>
									<motion.a
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										href='https://github.com/MauricioGT2024'
										className='btn-primary bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary'
										target='_blank'
										rel='noopener noreferrer'
									>
										Ver Github
									</motion.a>
								</div>
							</motion.div>
						</div>

					{/* Imagen con efectos modernos */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.3 }}
						className='relative'
					>
						<motion.div 
							className='absolute -inset-4 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-lg blur-lg'
							animate={{ 
								opacity: [0.5, 0.8, 0.5],
								scale: [1, 1.02, 1]
							}}
							transition={{ 
								duration: 3, 
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
						<div className='absolute -inset-4 bg-secondary/20 rounded-lg blur-md'></div>
						<div className='relative w-full h-[400px] rounded-lg overflow-hidden'>
							<img 
								src='/perfil.png' 
								alt='Mauricio' 
								className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
							/>
							<motion.div 
								className='absolute inset-0 bg-secondary/10'
								whileHover={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							/>
						</div>
						{/* Elementos decorativos */}
						<motion.div
							className='absolute -bottom-4 -right-4 w-24 h-24 border-4 border-secondary rounded-lg'
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
