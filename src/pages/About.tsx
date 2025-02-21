
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Building, Users, Globe, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-secondary mb-6">About CommBitz</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing global connectivity with cutting-edge eSIM technology, 
              making it easier than ever to stay connected worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-secondary mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide seamless, affordable connectivity solutions that empower people 
                to explore and connect across borders without limitations.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
              <p className="text-gray-600">
                A world where staying connected is effortless, regardless of where your 
                journey takes you.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Founded 2020</h3>
              <p className="text-gray-600">Started with a vision for global connectivity</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">100k+ Users</h3>
              <p className="text-gray-600">Trusted by travelers worldwide</p>
            </div>
            <div className="text-center p-6">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">190+ Countries</h3>
              <p className="text-gray-600">Global coverage and counting</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
