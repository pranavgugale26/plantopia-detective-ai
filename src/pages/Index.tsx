
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <InfoSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
