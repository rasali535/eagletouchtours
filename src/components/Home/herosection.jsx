import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = ({ onBookNowClick, activityCategories }) => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/42326efe083f6a2ba83e3570fd68fec4.jpg"
        >
          <source src="https://youtu.be/-96_iczdLaQ" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-20 flex flex-col items-center justify-center flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Explore Victoria Falls with
          <span className="block gradient-text">Eagle Touch Tours</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 leading-relaxed"
        >
          Discover unforgettable travel experiences in Zimbabwe's stunning landscapes and rich culture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            onClick={onBookNowClick}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full pulse-glow"
          >
            Book Your Adventure
          </Button>
        </motion.div>
      </div>

      <div className="relative z-10 pb-16 px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activityCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white text-center shadow-lg"
            >
              <Link to={category.path}>
                <div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;