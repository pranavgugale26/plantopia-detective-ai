
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertCircle, Check, CloudOff, Award, Leaf, Code } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4"
              >
                Our Mission
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="heading-lg mb-6 text-sage-900"
              >
                Making plant healthcare accessible to everyone
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-lg text-sage-700 leading-relaxed"
              >
                At Plantopia, we're combining advanced artificial intelligence with plant pathology expertise to help gardeners, farmers, and plant enthusiasts quickly identify and treat plant diseases.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-sage-50 rounded-3xl overflow-hidden shadow-xl shadow-sage-900/5 mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex items-center">
                  <div>
                    <h2 className="heading-sm mb-4 text-sage-800">How our technology works</h2>
                    <p className="text-sage-700 mb-6">
                      Our system uses state-of-the-art deep learning models trained on thousands of plant disease images. The AI analyzes visual patterns, discoloration, spots, and growth abnormalities to identify potential issues with high accuracy.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        { icon: <Check className="h-5 w-5 text-sage-600" />, text: "Trained on over 50,000 plant images" },
                        { icon: <Check className="h-5 w-5 text-sage-600" />, text: "Identifies 100+ common plant diseases" },
                        { icon: <Check className="h-5 w-5 text-sage-600" />, text: "Provides contextual treatment advice" }
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                            {item.icon}
                          </div>
                          <span className="ml-2 text-sage-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/analysis">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="button-shine bg-sage-600 hover:bg-sage-700 text-white py-3 px-6 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg shadow-sage-600/10 transition-colors"
                      >
                        Try it yourself <ArrowRight size={18} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-sage-100/80 to-sage-50/80 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 rounded-3xl bg-white/50 backdrop-blur-sm shadow-xl transform rotate-3"></div>
                    <div className="absolute inset-0 rounded-3xl bg-white/70 backdrop-blur-sm shadow-xl transform -rotate-3"></div>
                    <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                        alt="Plant analysis visualization" 
                        className="w-full object-cover aspect-[4/3]"
                      />
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-lg text-sage-800">Analysis Result</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            97% Match
                          </span>
                        </div>
                        <p className="text-sage-700 text-sm mb-3">
                          Healthy Pine Tree (Pinus sylvestris)
                        </p>
                        <div className="flex space-x-2">
                          <span className="px-2 py-1 bg-sage-100 text-sage-700 rounded-full text-xs">
                            No issues detected
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="heading-md mb-4 text-sage-900"
                >
                  Key Features
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-sage-700"
                >
                  Our technology is designed to be both powerful and accessible,
                  helping you keep your plants healthy with minimal effort.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <AlertCircle className="h-8 w-8 text-sage-600" />,
                    title: "Accurate Detection",
                    description: "Our deep learning algorithms can identify plant diseases with over 95% accuracy for common conditions."
                  },
                  {
                    icon: <CloudOff className="h-8 w-8 text-sage-600" />,
                    title: "Works Offline",
                    description: "Once loaded, our application can analyze plants without requiring an internet connection."
                  },
                  {
                    icon: <Award className="h-8 w-8 text-sage-600" />,
                    title: "Expert Advice",
                    description: "Treatment recommendations are developed in collaboration with agricultural scientists and botanists."
                  },
                  {
                    icon: <Leaf className="h-8 w-8 text-sage-600" />,
                    title: "Plant Database",
                    description: "Access information on hundreds of plant species and their common health issues."
                  },
                  {
                    icon: <Code className="h-8 w-8 text-sage-600" />,
                    title: "Open API",
                    description: "Integrate our plant disease detection capabilities into your own applications and services."
                  },
                  {
                    icon: <Check className="h-8 w-8 text-sage-600" />,
                    title: "Regular Updates",
                    description: "Our models are continuously trained on new data to improve accuracy and add new disease detection."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass p-6 rounded-2xl shadow-lg shadow-sage-600/5"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sage-100 mb-5">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-sage-800 mb-3">{feature.title}</h3>
                    <p className="text-sage-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center mb-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-md mb-16 text-sage-900"
              >
                Try our plant analysis today
              </motion.h2>
              
              <Link to="/analysis">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-shine bg-sage-600 hover:bg-sage-700 text-white py-4 px-10 rounded-full font-medium text-lg flex items-center justify-center gap-2 mx-auto shadow-xl shadow-sage-600/20 transition-colors"
                >
                  Start Analyzing <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
