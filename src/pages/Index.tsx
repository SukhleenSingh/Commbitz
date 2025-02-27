
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Destinations from '../components/Destinations';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import PartnerSlider from '@/components/Partnerslider';
import Getyoursim from '@/components/Getyoursim';
import Reviews from '@/components/Reviews';
import  Downloadcom from '@/components/Downloadcom';
import Footer from '@/components/Footer';
import Details from '@/components/Details';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PartnerSlider/>
      <Destinations />
      <Getyoursim/>
      <Reviews/>
      <Details/>
      <Downloadcom/>
      <Features />
      <Footer/>
      

    </div>
  );
};

export default Index;
