import { motion } from 'framer-motion';
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNode,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiChakraui } from 'react-icons/si';

const skills = [
	{ name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
	{ name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
	{ name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
	{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
	{ name: 'React', icon: FaReact, color: '#61DAFB' },
	{ name: 'Node.js', icon: FaNode, color: '#339933' },
	{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
	{ name: 'ChakraUi', icon: SiChakraui, color: 'lightseagreen;' },
];

const Skills = () => {
	return (
		<section id='skills' className='py-20 bg-primary'>
			<div className='container mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className='section-title text-center'>Mis Habilidades</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{skills.map((skill) => (
							<motion.div
								key={skill.name}
								className='flex flex-col items-center'
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.3 }}
							>
								<skill.icon
									size={50}
									style={{ color: skill.color }}
									className='mb-2'
								/>
								<span className='text-textSecondary'>{skill.name}</span>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
