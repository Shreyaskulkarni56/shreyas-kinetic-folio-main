import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronDown, Clock } from 'lucide-react';

const projects = [
	{
		title: 'AI-Powered Currency Exchange App',
		description:
			'Real-time currency conversion using APIs with a beautiful, responsive design.',
		tags: ['React', 'API', 'Tailwind CSS'],
		gradient: 'from-blue-500 to-cyan-500',
		demoUrl: 'https://crrency.netlify.app',
		githubUrl:
			'https://github.com/Shreyaskulkarni56/-Real-time-Currency-Convertor-',
		completionDate: '2023-12-15',
		startDate: '2023-11-01',
	},
	// {
	// 	title: 'Portfolio Website',
	// 	description:
	// 		'Modern, animated portfolio with smooth transitions and beautiful UI.',
	// 	tags: ['React', 'Framer Motion', 'Tailwind'],
	// 	gradient: 'from-orange-500 to-red-500',
	// 	demoUrl: 'https://ayushveda.example.com',
	// 	githubUrl: 'https://github.com/Shreyaskulkarni56/shreyas-kinetic-folio',
	// 	completionDate: '2023-12-15',
	// 	startDate: '2023-11-01',
	// },
	{
		title: 'Ayushveda Web App',
		description:
			'Ayurvedic e-commerce platform featuring clean design and seamless user experience.',
		tags: ['Next.js', 'E-commerce', 'UI/UX'],
		gradient: 'from-green-500 to-emerald-500',
		demoUrl: 'https://ayushveda.example.com',
		githubUrl: 'https://github.com/Shreyaskulkarni56/AyshuVeda-',
		completionDate: '2023-12-15',
		startDate: '2023-11-01',
	},
];

export const Projects = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<section id="projects" className="py-20 md:py-32 bg-card/30" ref={ref}>
			<div className="container mx-auto px-6">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Featured{' '}
						<span className="text-gradient">Projects</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Here are some of my recent projects that showcase my skills and
						passion for development.
					</p>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.1 * index, duration: 0.6 }}
							whileHover={{ y: -10 }}
							className="group relative"
						>
							{/* Card */}
							<div className="relative h-full bg-card rounded-2xl p-8 border border-border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_hsl(var(--primary)/0.2)]">
								{/* Expand button */}
								<div className="absolute top-4 right-4">
									<button
										onClick={() =>
											setExpandedIndex(
												expandedIndex === index ? null : index
											)
										}
										className="p-2 hover:bg-primary/10 rounded-full transition-colors"
									>
										<ChevronDown
											className={`w-5 h-5 transition-transform ${
												expandedIndex === index ? 'transform rotate-180' : ''
											}`}
										/>
									</button>
								</div>

								{/* Content */}
								<div className="relative z-10">
									<h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
										{project.title}
									</h3>

									<p className="text-foreground/80 mb-6 leading-relaxed">
										{project.description}
									</p>

									{/* Tags */}
									<div className="flex flex-wrap gap-2 mb-6">
										{project.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
											>
												{tag}
											</span>
										))}
									</div>

									{/* Links */}
									<div className="flex gap-4">
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
										>
											<ExternalLink className="w-4 h-4" />
											<span className="text-sm font-medium">View Demo</span>
										</motion.button>

										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => window.open(project.githubUrl, '_blank')}
											className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
										>
											<Github className="w-4 h-4" />
											<span className="text-sm font-medium">Code</span>
										</motion.button>
									</div>
								</div>

								{/* Collapsible date info */}
								<motion.div
									initial={false}
									animate={{ height: expandedIndex === index ? 'auto' : 0 }}
									className="overflow-hidden"
								>
									<div className="pt-4 border-t mt-4">
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<Clock className="w-4 h-4" />
											<span>
												Started:{' '}
												{new Date(project.startDate).toLocaleDateString()}
											</span>
											<span>•</span>
											<span>
												Completed:{' '}
												{new Date(project.completionDate).toLocaleDateString()}
											</span>
										</div>
									</div>
								</motion.div>

								{/* Hover Effect */}
								<motion.div
									className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
