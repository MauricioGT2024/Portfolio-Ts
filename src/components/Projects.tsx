import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FaExternalLinkAlt, FaGithubAlt } from 'react-icons/fa';
const Projects = () => {
	return (
		<section id='projects' className='py-20 bg-primary'>
			<div className='container mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className='section-title'>Mis Proyectos</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{projects.map((project) => (
							<motion.div
								key={project.id}
								className='bg-tertiary rounded-lg overflow-hidden'
								whileHover={{ y: -10 }}
								transition={{ duration: 0.3 }}
							>
								<div className='relative group'>
									<img
										src={project.image}
										alt={project.title}
										className='w-full h-48 object-cover'
									/>
									<div className='absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
										{project.liveUrl && (
											<a
												href={project.liveUrl}
												target='_blank'
												rel='noopener noreferrer'
												className='bg-primary p-3 rounded-full hover:bg-primary/80 transition-colors'
											>
												<FaExternalLinkAlt size={20} />
											</a>
										)}
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='bg-primary p-3 rounded-full hover:bg-primary/80 transition-colors'
										>
											<FaGithubAlt size={20} />
										</a>
									</div>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-bold mb-2'>{project.title}</h3>
									<p className='text-textSecondary mb-4'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-4'>
										{project.technologies.map((tech, index) => (
											<motion.div
												key={index}
												whileHover={{ scale: 1.2 }}
												className='tooltip-container'
											>
												<tech.icon
													size={24}
													className='text-secondary hover:text-secondary/80 transition-colors'
												/>
												<span className='tooltip'>{tech.name}</span>
											</motion.div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
