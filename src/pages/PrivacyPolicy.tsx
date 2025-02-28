import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="bg-[#111111]  text-white min-h-screen">
      <Navbar />
      <div className="mx-20 text-[17px] p-6 py-20">
        <h1 className="text-4xl font-semibold text-center mb-4">Privacy Policy</h1>
        <p>Welcome to Commbitz. Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you visit our website.</p>
        
        <p className="mt-4">This privacy policy aims to provide you with information on how Commbitz collects and processes your data through this website, including any data you may provide when you sign up for our services, purchase a product or service, or participate in a promotion.</p>
        
        <p className="mt-4">We do not sell or rent your personal information. We may share your data with service providers who assist us in operating our website and conducting our business, or with legal authorities if required by law.</p>
        
        <p className="mt-4">We implement appropriate security measures to protect your data from unauthorized access and disclosure.</p>
        
        <p className="mt-4">We may update this policy occasionally. We’ll let you know of any significant changes by posting the new policy on our website.</p>
        
        <p className="mt-4">If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:hello@commbitz.com" className="text-blue-600">hello@commbitz.com</a>.</p>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
