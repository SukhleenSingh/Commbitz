
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-secondary to-secondary-light overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Travel Smart With eSIM
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect instantly in over 190+ countries. No physical SIM needed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
