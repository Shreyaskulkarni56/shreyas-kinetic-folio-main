import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, Home, User, Briefcase, FolderKanban, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent, 
  SheetTrigger,
} from '@/components/ui/sheet';
const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Work', href: '/work', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo removed - keep a minimal spacer to preserve layout */}
            <div aria-hidden className="w-0" />

            {/* Desktop Nav Items */}
            <div className="flex items-center gap-8">
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

      {/* Mobile Theme Toggle - Left Corner */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        onClick={toggleTheme}
        className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-full bg-background/95 backdrop-blur-lg border border-border shadow-lg hover:bg-accent transition-colors"
        aria-label="Toggle theme"
        whileTap={{ scale: 0.95 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-primary" />
        ) : (
          <Moon className="w-5 h-5 text-primary" />
        )}
      </motion.button>

      {/* Mobile Bottom Navigation Bar */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-4 left-4 right-4 z-50"
      >
        {/* Curved top edges container */}
        <div className="rounded-3xl bg-background/95 backdrop-blur-lg border border-border shadow-2xl overflow-hidden">
          <div className="flex items-center justify-around px-2 py-3">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleNavigation(item.href)}
                  className={`relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground/60'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBottomNav"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-primary' : ''}`} />
                  <span className={`text-xs font-medium relative z-10 ${isActive ? 'text-primary' : ''}`}>
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
};
