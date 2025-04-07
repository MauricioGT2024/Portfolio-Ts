import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Gracias = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Redirigir a la página principal después de 5 segundos
		const timeout = setTimeout(() => {
			navigate('/');
		}, 5000);

		return () => clearTimeout(timeout);
	}, [navigate]);

	return (
		<div className='min-h-screen flex items-center justify-center bg-primary px-4'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='text-center'
			>
				<h1 className='text-4xl font-bold mb-4'>¡Gracias por tu mensaje!</h1>
				<p className='text-textSecondary mb-8'>
					Me pondré en contacto contigo pronto.
				</p>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.2 }}
				>
					<button onClick={() => navigate('/')} className='btn-primary'>
						Volver al inicio
					</button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Gracias;
