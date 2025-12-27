import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Code, GraduationCap, Award, Users, Rocket } from 'lucide-react';

const experiences = [
  {
    title: 'Fullstack Web Developer',
    company: 'Armtronix Pvt Ltd',
    period: 'Dec 2025 - Present',
    description: 'Working on Iot-based and AI-integrated web applications and optimized user interaction.',
    icon: Briefcase, // Choose from: Briefcase, Code, GraduationCap, Award, Users, Rocket
  },
  {
    title: 'Software Intern',
    company: 'Ultimez Technologies',
    period: 'Aug 2025 - Sep 2025',
    description: 'Worked on AI-integrated web applications and optimized user interaction.',
    icon: Briefcase,
  },
  {
    title: 'Fullstack Developer',
    company: 'Samagra Technologies',
    period: 'July 2025 - Oct 2025',
    description: 'Built dynamic websites using React, Next.js, and Tailwind CSS. Developed backend APIs and database solutions.',
    icon: Code,
  },
  // Add more experiences below - just copy the structure above
  // Example template:
 
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Gradient */}
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
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-1/2 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-secondary -translate-x-1/2 hidden md:block" />
                )}

                <div className={`flex flex-col md:flex-row gap-8 items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-[0_8px_32px_hsl(var(--primary)/0.2)] transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold mb-2">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exp.period.includes('Present') ? (
                            <>
                              {exp.period.split('Present')[0]}
                              <span className="blur-[5px]">Present</span>
                            </>
                          ) : (
                            exp.period
                          )}
                        </p>
                        <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.2 * index + 0.3, type: 'spring' }}
                    className="relative z-10 hidden md:block"
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-75" />
                  </motion.div>

                  {/* Spacer for layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
