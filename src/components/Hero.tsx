
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sage-200/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-sage-100/60 rounded-full blur-3xl" />
      </div>
      
      {/* Floating leaves */}
      <motion.div
        className="absolute top-20 right-20 text-sage-500/20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Leaf size={120} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-10 text-sage-400/10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Leaf size={150} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6"
          >
            AI-Powered Plant Health
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl mb-6 text-sage-900"
          >
            Detect plant diseases with
            <span className="block text-sage-600">precision and ease</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-sage-700 mb-8 leading-relaxed"
          >
            Upload a photo of your plant and our advanced AI will instantly analyze and identify potential diseases, providing treatment recommendations to keep your garden thriving.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/analysis">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="button-shine bg-sage-600 hover:bg-sage-700 text-white py-3 px-8 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg shadow-sage-600/20 transition-colors"
              >
                Start Analysis <ArrowRight size={18} />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-sage-50 text-sage-700 border border-sage-200 py-3 px-8 rounded-full font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Features section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-24"
        >
          {[
            {
              icon: <Search className="w-6 h-6 text-sage-600" />,
              title: "Advanced Detection",
              description: "Our AI recognizes over 50 common plant diseases with high accuracy."
            },
            {
              icon: <Shield className="w-6 h-6 text-sage-600" />,
              title: "Treatment Plans",
              description: "Get personalized recommendations to treat and prevent plant diseases."
            },
            {
              icon: <Leaf className="w-6 h-6 text-sage-600" />,
              title: "Plant Health History",
              description: "Track your plant's health over time with visual progress monitoring."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "glass p-6 rounded-2xl",
                "shadow-xl shadow-sage-500/5",
                "border border-white/40"
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sage-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">{feature.title}</h3>
              <p className="text-sage-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
