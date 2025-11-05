import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-heading font-bold"
          >
            <span className="text-gradient">SK</span>
          </motion.div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: isActive ? 1.05 : 1
                  }}
                  transition={{ 
                    delay: 0.1 * index,
                    scale: { type: 'spring', stiffness: 300, damping: 20 }
                  }}
                  onClick={() => handleNavigation(item.href)}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-foreground/70 hover:text-foreground/90'
                  }`}
                >
                  <motion.span
                    animate={{
                      y: isActive ? -2 : 0
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="block"
                  >
                    {item.name}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary shadow-glow"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-primary" />
            ) : (
              <Moon className="w-5 h-5 text-primary" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
