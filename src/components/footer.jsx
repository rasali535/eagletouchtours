import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                alt="Eagle Touch Tours Logo"
                className="h-16 w-auto"
                src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/bf271bc1f2f87a8d121b75e1dc0c1115.png" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover unforgettable travel experiences in Zimbabwe's stunning landscapes and rich culture with Eagle Touch Tours.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/eagletouchtours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/EagleTouchTours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://twitter.com/EagleTouchTours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-orange-400">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/activities" className="block text-gray-300 hover:text-white transition-colors">Activities</Link>
              <Link to="/tours" className="block text-gray-300 hover:text-white transition-colors">Tours</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-orange-400">Activities</span>
            <div className="space-y-2">
              <Link to="/activities/adrenaline" className="block text-gray-300 hover:text-white transition-colors">Adrenaline Activities</Link>
              <Link to="/activities/water" className="block text-gray-300 hover:text-white transition-colors">Water Activities</Link>
              <Link to="/activities/air" className="block text-gray-300 hover:text-white transition-colors">Air Activities</Link>
              <Link to="/activities/safari" className="block text-gray-300 hover:text-white transition-colors">Safari</Link>
              <Link to="/activities/culture" className="block text-gray-300 hover:text-white transition-colors">Culture Tours</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-orange-400">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Train office PARKWAY DR Victoria Falls Zimbabwe</span>
              </div>
        
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">reservations@eagletouchtours.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Eagle Touch Tours. All rights reserved. | Exploring Victoria Falls and Beyond | Web dev & design by Themaplin Production
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;