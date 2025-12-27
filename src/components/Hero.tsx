import { motion } from 'framer-motion';
import { ChevronDown, Code, Globe, Zap, Database, Cpu, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import About from '@/components/About';
import { RealTimeClock } from '@/components/RealTimeClock';

const techIcons = [
  { icon: Code, label: 'JavaScript', delay: 0, x: '10%', y: '20%' },
  { icon: Globe, label: 'React', delay: 0.2, x: '85%', y: '15%' },
  { icon: Zap, label: 'Node.js', delay: 0.4, x: '15%', y: '75%' },
  { icon: Database, label: 'Database', delay: 0.6, x: '80%', y: '70%' },
  { icon: Cpu, label: 'Full Stack', delay: 0.8, x: '50%', y: '10%' },
];

const socialIcons = [
  { icon: Github, href: '#', delay: 0 },
  { icon: Linkedin, href: '#', delay: 0.1 },
  { icon: Mail, href: '#', delay: 0.2 },
  { icon: FileText, href: '#', delay: 0.3 },
];

export const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <RealTimeClock />
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/batman..webp)',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-2xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-2xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Floating Tech Icons */}
        {techIcons.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={index}
              className="absolute hidden md:block"
              style={{
                left: tech.x,
                top: tech.y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                delay: tech.delay,
                ease: 'easeInOut',
              }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/20 transition-colors"></div>
                <div className="relative bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-primary/20 shadow-lg group-hover:border-primary/40 transition-all">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(34, 197, 94, 0.3)',
                    '0 0 20px rgba(34, 197, 94, 0.5)',
                    '0 0 10px rgba(34, 197, 94, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 text-white font-semibold text-sm backdrop-blur-sm border border-green-400/30"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-white rounded-full"
                />
                Available for Work
              </motion.div>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl text-muted-foreground font-light"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <div className="w-full flex items-center justify-center gap-2 md:gap-4 lg:gap-6 flex-wrap md:flex-nowrap px-8 md:px-12 lg:px-16 py-4">
              {/* Shreyas - Animates from left */}
              <motion.h1
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1.2, type: 'spring', stiffness: 80, damping: 12 }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-primary to-primary bg-clip-text text-transparent whitespace-nowrap"
              >
                Shreyas
              </motion.h1>
              
              {/* Kulkarni - Animates from right */}
              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1.2, type: 'spring', stiffness: 80, damping: 12 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent whitespace-nowrap"
              >
                Kulkarni
              </motion.h1>
            </div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-2"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                Full Stack Web Developer
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Crafting digital experiences with{' '}
                <span className="text-primary font-semibold">JavaScript</span>,{' '}
                <span className="text-primary font-semibold">React</span>, and{' '}
                <span className="text-primary font-semibold">Node.js</span>
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4"
            >
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + social.delay, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-background/60 backdrop-blur-md border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/work')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary via-blue-500 to-secondary text-white font-semibold text-lg shadow-lg relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative z-10">View My Work</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold text-lg bg-background/40 backdrop-blur-md hover:bg-primary hover:text-white transition-all"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About section inserted below hero */}
      <About />
    </>
  );
};
