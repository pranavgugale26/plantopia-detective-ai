
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-sage-50 border-t border-sage-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-sage-600" />
              <span className="font-semibold text-xl tracking-tight text-sage-900">Plantopia</span>
            </Link>
            <p className="text-sage-600 mb-6 max-w-md">
              Advanced AI-powered plant disease detection and treatment recommendations to keep your garden thriving.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-800"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-800"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                href="mailto:info@example.com"
                className="text-sage-600 hover:text-sage-800"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sage-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Analysis", "Privacy"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sage-600 hover:text-sage-800 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sage-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Plant Care Guide", url: "#" },
                { name: "Common Diseases", url: "#" },
                { name: "Treatment Methods", url: "#" },
                { name: "API Documentation", url: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-sage-600 hover:text-sage-800 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-sage-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sage-500 text-sm">
              &copy; {currentYear} Plantopia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sage-500 hover:text-sage-700 text-xs">
                Terms of Service
              </a>
              <a href="#" className="text-sage-500 hover:text-sage-700 text-xs">
                Privacy Policy
              </a>
              <a href="#" className="text-sage-500 hover:text-sage-700 text-xs">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
