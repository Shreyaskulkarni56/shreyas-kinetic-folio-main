import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Database, Cpu, Brain, FileCode, Globe, GitBranch, Sparkles, Zap } from 'lucide-react';
import { cursorTo } from 'readline';

const techStack = [
  { name: 'Python', color: 'from-blue-400 to-yellow-400', icon: Code2 },
  { name: 'React', color: 'from-cyan-400 to-blue-500', icon: Zap },
  { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-600', icon: Palette },
  { name: 'Flask', color: 'from-gray-700 to-gray-900', icon: Code2 },
  { name: 'JavaScript', color: 'from-blue-600 to-blue-800', icon: FileCode },
  { name: 'Node.js', color: 'from-green-600 to-green-800', icon: Cpu },
  { name: 'MongoDB', color: 'from-blue-700 to-blue-900', icon: Database },
  { name: 'Git & GitHub', color: 'from-orange-600 to-red-600', icon: GitBranch },
  { name: 'OpenAI', color: 'from-green-400 to-cyan-500', icon: Sparkles },
  { name: 'Cursor', color: 'from-gray-700 to-gray-900', icon: Code2 },

];

export const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tech" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 0.05 * index,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -10,
                  rotate: 5,
                }}
                className="relative group cursor-pointer"
              >
                {/* Card */}
                <div className="relative h-32 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_hsl(var(--primary)/0.2)]">
                  {/* Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 gap-3">
                    {/* Icon: smaller size + subtle horizontal oscillation */}
                    <motion.div
                      initial={{ x: 0 }}
                      animate={isInView ? { x: [-4, 4, -4] } : {}}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.08,
                      }}
                      whileHover={{ scale: 1.25 }}
                      aria-hidden
                    >
                      <tech.icon className="w-4 h-4 text-primary group-hover:text-primary transition-colors" />
                    </motion.div>

                    <h3 className="text-center text-sm font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, hsl(var(--primary) / 0.2), transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="max-w-2xl mx-auto p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border shadow-lg">
              <p className="text-muted-foreground">
                <span className="block text-xl font-medium text-primary mb-2">
                  "Karmanye vadhikaraste ma phaleshu kadachana."
                </span>
                <span className="block text-sm mt-2">
                  – Gita 2.47
                </span>
                <span className="block text-sm mt-4 italic text-muted-foreground/80">
                  "You have the right to work only, but never to its fruits."
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
