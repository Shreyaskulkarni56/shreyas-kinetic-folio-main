import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import profileImg from '@/assets/profile/01SU22AI108 Shreyas g Kulkarni.png';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 md:py-32 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Back Button
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          aria-label="Go back to home"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button> */}

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
            {/* Profile Image and Languages */}
            <motion.div
              className="flex flex-col items-center md:items-start"
            >
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex justify-center md:justify-start w-full"
              >
                <motion.div
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50" />
                  <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                    <img
                      src={profileImg}
                      alt="Shreyas Kulkarni"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Languages Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8 w-full"
              >
                <div className="flex flex-wrap gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-auto px-3 py-2 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-accent transition-colors cursor-default"
                    title="English"
                  >
                    <span className="text-sm font-medium text-primary">English</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-auto px-3 py-2 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-accent transition-colors cursor-default"
                    title="Hindi"
                  >
                    <span className="text-sm font-medium text-primary">Kannada</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-auto px-3 py-2 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-accent transition-colors cursor-default"
                    title="Kannada"
                  >
                    <span className="text-sm font-medium text-primary">Hindi</span>
                  </motion.div>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Shreyas Kulkarni</h1>
              
              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex gap-4 items-center"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-accent transition-colors hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-accent transition-colors hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:shreyaskulkarni051@gmail.com"
                  className="p-2 rounded-full bg-card hover:bg-accent transition-colors hover:text-primary"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://your-portfolio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-accent transition-colors hover:text-primary"
                  aria-label="Portfolio"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </motion.div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                "I'm a 4th-year AIML engineering student at Srinivas Institute of Technology.I'm passionate about technology and love building clean, functional web applications. 
                I enjoy turning ideas into real products and constantly explore Machine Learning to understand how intelligent systems work.
                I focus on web development,AI-assisted building, and diving deeper into ML concepts to create smarter digital experiences."
              </p>

              {/* Stats */}
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;