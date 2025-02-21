
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Globe, Wifi, CreditCard, Clock } from 'lucide-react';

const plans = [
  {
    name: "Europe Travel",
    data: "10GB",
    duration: "7 days",
    price: "$29.99",
    features: [
      "Coverage in 45 European countries",
      "4G/5G where available",
      "No contract required",
      "Instant activation"
    ]
  },
  {
    name: "Global Explorer",
    data: "20GB",
    duration: "30 days",
    price: "$49.99",
    features: [
      "Coverage in 190+ countries",
      "4G/5G where available",
      "24/7 support",
      "Data sharing enabled"
    ]
  },
  {
    name: "Asia Pacific",
    data: "15GB",
    duration: "15 days",
    price: "$39.99",
    features: [
      "Coverage in 25 Asian countries",
      "4G/5G where available",
      "Hotspot capability",
      "Free WhatsApp usage"
    ]
  }
];

const Esim = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-secondary mb-6">eSIM Plans</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect eSIM plan for your travels. Stay connected worldwide with our flexible data packages.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Wifi className="w-5 h-5 text-primary mr-3" />
                      <span>{plan.data} Data</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-3" />
                      <span>{plan.duration} Validity</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600">Connect seamlessly in 190+ countries worldwide</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Plans</h3>
              <p className="text-gray-600">Choose plans that fit your travel needs</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Activation</h3>
              <p className="text-gray-600">Get connected in minutes, not hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esim;
