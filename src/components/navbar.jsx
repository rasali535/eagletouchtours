import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = path => location.pathname === path;

  const handleBookNowClick = () => {
    navigate('/booking');
  };

  const activities = [
    { name: 'Adrenaline Activities', path: '/activities/adrenaline' },
    { name: 'Water Activities', path: '/activities/water' },
    { name: 'Air Activities', path: '/activities/air' },
    { name: 'Safari', path: '/activities/safari' },
    { name: 'Culture Tours', path: '/activities/culture' },
    { name: 'Combo Deals', path: '/activities/combo' }
  ];

  // Logic to close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActivitiesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <img alt="Eagle Touch Tours Logo" className="h-16 w-auto" src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/bf271bc1f2f87a8d121b75e1dc0c1115.png" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link text-gray-700 hover:text-green-600 font-medium ${isActive('/') ? 'text-green-600' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link text-gray-700 hover:text-green-600 font-medium ${isActive('/about') ? 'text-green-600' : ''}`}>
              About
            </Link>

            {/* Activities Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setActivitiesOpen(!activitiesOpen)}
                className={`nav-link text-gray-700 hover:text-green-600 font-medium flex items-center ${location.pathname.startsWith('/activities') ? 'text-green-600' : ''}`}
              >
                Activities
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activitiesOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>

              {activitiesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                >
                  <Link
                    to="/activities"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium"
                  >
                    All Activities
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {activities.map(activity => (
                    <Link
                      key={activity.path}
                      to={activity.path}
                      className={`block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 ${isActive(activity.path) ? 'text-green-600 bg-green-50' : ''}`}
                    >
                      {activity.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link to="/tours" className={`nav-link text-gray-700 hover:text-green-600 font-medium ${isActive('/tours') ? 'text-green-600' : ''}`}>
              Tours
            </Link>
            <Link to="/services" className={`nav-link text-gray-700 hover:text-green-600 font-medium ${isActive('/services') ? 'text-green-600' : ''}`}>
              Services
            </Link>
            <Link to="/contact" className={`nav-link text-gray-700 hover:text-green-600 font-medium ${isActive('/contact') ? 'text-green-600' : ''}`}>
              Contact
            </Link>

            <motion.button onClick={handleBookNowClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
              Book Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link onClick={() => setIsOpen(false)} to="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</Link>
              <Link onClick={() => setIsOpen(false)} to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600">About</Link>
              
              <button
                onClick={() => setActivitiesOpen(!activitiesOpen)}
                className="w-full text-left flex items-center justify-between px-3 py-2 text-gray-700 hover:text-green-600"
              >
                Activities
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activitiesOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              
              {activitiesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-1 pl-4"
                >
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/activities"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600"
                  >
                    All Activities
                  </Link>
                  {activities.map(activity => (
                    <Link
                      key={activity.path}
                      onClick={() => setIsOpen(false)}
                      to={activity.path}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600"
                    >
                      {activity.name}
                    </Link>
                  ))}
                </motion.div>
              )}

              <Link onClick={() => setIsOpen(false)} to="/tours" className="block px-3 py-2 text-gray-700 hover:text-green-600">Tours</Link>
              <Link onClick={() => setIsOpen(false)} to="/services" className="block px-3 py-2 text-gray-700 hover:text-green-600">Services</Link>
              <Link onClick={() => setIsOpen(false)} to="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Contact</Link>
              <button onClick={handleBookNowClick} className="w-full text-left px-3 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;