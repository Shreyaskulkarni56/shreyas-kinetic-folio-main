import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"
          />

          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex justify-center md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50" />
                <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                  <span className="text-6xl font-bold text-gradient">SK</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 space-y-6"
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a developer with experience in building{' '}
                <span className="text-primary font-semibold">AI-powered</span> and{' '}
                <span className="text-secondary font-semibold">web-based applications</span>.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                I love blending <span className="text-primary font-semibold">creativity with technology</span> — 
                from crafting clean UI/UX to integrating machine learning into real-world apps.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My passion lies in creating solutions that are not only functional but also 
                <span className="text-gradient font-semibold"> beautiful and intuitive</span>.
              </p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">3+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Technologies</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
