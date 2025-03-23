
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Analysis', path: '/analysis' },
    { name: 'About', path: '/about' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo px-6 py-4',
        isScrolled ? 'glass shadow-sm border-b border-white/20 backdrop-blur-lg' : ''
      )}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="Home"
          >
            <motion.div 
              whileHover={{ rotate: 25 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <Leaf className="h-6 w-6 text-sage-600" />
            </motion.div>
            <span className="font-semibold text-xl tracking-tight">Plantopia</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "relative py-2 font-medium text-sm transition-colors hover:text-sage-700",
                    location.pathname === link.path 
                      ? "text-sage-700" 
                      : "text-sage-600"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-sage-500"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              </li>
            ))}
            <motion.li 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://github.com/yourusername/plantopia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-100 text-sage-700 hover:bg-sage-200 py-2 px-4 rounded-full text-sm font-medium transition-colors"
              >
                GitHub
              </a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-sage-700 hover:text-sage-900 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="container mx-auto py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "block py-2 font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-sage-700"
                      : "text-sage-600 hover:text-sage-700"
                  )}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <a
                href="https://github.com/yourusername/plantopia"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-sage-100 text-sage-700 hover:bg-sage-200 py-2 px-4 rounded-full text-sm font-medium transition-colors text-center"
              >
                GitHub
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
