
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Shield, Coins } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Coverage",
    description: "Stay connected in 190+ countries worldwide with our reliable network coverage"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Activation",
    description: "Get connected immediately with our quick and easy eSIM activation process"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Connection",
    description: "Enhanced security features to keep your data safe while you travel"
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Cost-Effective",
    description: "Save on roaming charges with our competitive international data plans"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Why Choose Our eSIM?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience seamless connectivity with our innovative eSIM solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
