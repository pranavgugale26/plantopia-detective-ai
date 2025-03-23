
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <div className="w-24 h-24 mx-auto bg-sage-100 rounded-full flex items-center justify-center">
                <Leaf className="h-12 w-12 text-sage-600" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg mb-4 text-sage-900"
            >
              404
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-sage-700 mb-8"
            >
              Oops! We couldn't find the page you were looking for.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-sage-600 hover:bg-sage-700 text-white py-3 px-6 rounded-full font-medium flex items-center justify-center gap-2 mx-auto shadow-lg shadow-sage-600/10 transition-colors"
                >
                  <ArrowLeft size={18} /> Return to Home
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default NotFound;
