import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<section id='contact' className='py-20 bg-primary'>
			<div className='container mx-auto px-6'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={containerVariants}
					className='max-w-2xl mx-auto'
				>
					<motion.div variants={itemVariants} className='text-center mb-12'>
						<h2 className='text-4xl font-bold mb-4'>Contáctame</h2>
						<p className='text-textSecondary'>
							¿Tienes alguna pregunta o propuesta? ¡No dudes en escribirme!
						</p>
					</motion.div>

					<form
						action='https://formsubmit.co/senasilvana192@gmail.com' // Reemplaza con tu email
						method='POST'
						className='space-y-6'
					>
						{/* Campos ocultos de configuración de formsubmit.co */}
						<input
							type='hidden'
							name='_subject'
							value='Nuevo mensaje del portfolio!'
						/>
						<input type='hidden' name='_captcha' value='false' />
						<input type='hidden' name='_template' value='box' />
						<input
							type='hidden'
							name='_next'
							value='https://tu-portfolio.com/gracias' // Reemplaza con tu URL de agradecimiento
						/>

						<motion.div variants={itemVariants}>
							<label htmlFor='name' className='block text-sm font-medium mb-2'>
								Nombre
							</label>
							<input
								type='text'
								id='name'
								name='name'
								required
								className='w-full px-4 py-2 rounded-lg bg-tertiary border border-textSecondary 
                         focus:border-secondary outline-none transition-colors'
								placeholder='Tu nombre'
							/>
						</motion.div>

						<motion.div variants={itemVariants}>
							<label htmlFor='email' className='block text-sm font-medium mb-2'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								required
								className='w-full px-4 py-2 rounded-lg bg-tertiary border border-textSecondary 
                         focus:border-secondary outline-none transition-colors'
								placeholder='tu@email.com'
							/>
						</motion.div>

						<motion.div variants={itemVariants}>
							<label
								htmlFor='message'
								className='block text-sm font-medium mb-2'
							>
								Mensaje
							</label>
							<textarea
								id='message'
								name='message'
								required
								rows={5}
								className='w-full px-4 py-2 rounded-lg bg-tertiary border border-textSecondary 
                         focus:border-secondary outline-none transition-colors resize-none'
								placeholder='Tu mensaje...'
							/>
						</motion.div>

						<motion.div variants={itemVariants} className='flex justify-center'>
							<button
								type='submit'
								className='group relative inline-flex items-center justify-center px-8 py-3 
                         bg-secondary text-primary font-medium rounded-lg overflow-hidden
                         transition-all duration-300 ease-out hover:scale-105'
							>
								<span
									className='absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-secondary
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300'
								/>
								<span className='relative flex items-center gap-2'>
									Enviar mensaje
									<FaPaperPlane
										className='transform group-hover:translate-x-1 group-hover:-translate-y-1
                             transition-transform duration-300'
									/>
								</span>
							</button>
						</motion.div>
					</form>

					{/* Información de contacto adicional */}
					<motion.div
						variants={containerVariants}
						className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center'
					>
						<motion.div
							variants={itemVariants}
							className='p-6 rounded-lg bg-tertiary'
						>
							<h3 className='text-lg font-semibold mb-2'>Ubicación</h3>
							<p className='text-textSecondary'>Catamarca, Argentina</p>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className='p-6 rounded-lg bg-tertiary'
						>
							<h3 className='text-lg font-semibold mb-2'>Email</h3>
							<a
								href='mailto:senasilvana192@gmail.com'
								className='text-secondary hover:text-secondary/80 transition-colors'
							>
								senasilvana192@gmail.com
							</a>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
