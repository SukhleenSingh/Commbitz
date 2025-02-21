
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Wifi } from 'lucide-react';

const steps = [
  {
    icon: <Download className="w-8 h-8" />,
    title: "Purchase & Download",
    description: "Choose your plan and download the eSIM profile"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Install eSIM",
    description: "Scan QR code or install directly on your device"
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Connect & Go",
    description: "Activate your plan and start using data immediately"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get connected in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
