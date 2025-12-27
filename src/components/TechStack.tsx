import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Tech Stack Logos Component - Using CDN images for official logos
const TechLogo = ({ name }: { name: string }) => {
  const [hasError, setHasError] = useState(false);
  
  const logoUrls: { [key: string]: string } = {
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Git & GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    OpenAI: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    Cursor: 'https://www.cursor.com/favicon.ico',
  };

  if (hasError) {
    return (
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-xs font-bold text-primary">
        {name.slice(0, 2)}
      </div>
    );
  }

  return (
    <img 
      src={logoUrls[name]} 
      alt={name}
      className="w-12 h-12 object-contain"
      onError={() => setHasError(true)}
    />
  );
};

const techStack = [
  { name: 'Python', gradient: 'from-blue-400 via-blue-500 to-yellow-400' },
  { name: 'React', gradient: 'from-cyan-400 via-blue-400 to-blue-600' },
  { name: 'Tailwind CSS', gradient: 'from-cyan-400 via-blue-500 to-blue-700' },
  { name: 'Flask', gradient: 'from-gray-600 via-gray-700 to-gray-900' },
  { name: 'JavaScript', gradient: 'from-yellow-400 via-yellow-500 to-yellow-600' },
  { name: 'Node.js', gradient: 'from-green-500 via-green-600 to-green-700' },
  { name: 'MongoDB', gradient: 'from-green-600 via-green-700 to-green-900' },
  { name: 'Git & GitHub', gradient: 'from-orange-500 via-orange-600 to-red-600' },
  { name: 'OpenAI', gradient: 'from-green-400 via-cyan-400 to-cyan-600' },
  { name: 'Cursor', gradient: 'from-gray-700 via-gray-800 to-gray-900' },
];

// Duplicate array for seamless infinite scroll
const duplicatedTechStack = [...techStack, ...techStack];

export const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tech" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Infinite Scrolling Row */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -(techStack.length * 224)], // w-52 (208px) + gap-4 (16px) = 224px per item
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedTechStack.map((tech, index) => {
                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 w-52"
                    whileHover={{ 
                      scale: 1.1,
                      y: -10,
                    }}
                  >
                    <div className="relative group cursor-pointer h-32 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
                      {/* Animated Gradient Background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 gap-3">
                        {/* Tech Logo */}
                        <motion.div
                          className="relative"
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.2,
                          }}
                          whileHover={{
                            rotate: 360,
                            scale: 1.2,
                          }}
                        >
                          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                            <TechLogo name={tech.name} />
                          </div>
                        </motion.div>

                        {/* Tech Name */}
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
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
    </section>
  );
};
