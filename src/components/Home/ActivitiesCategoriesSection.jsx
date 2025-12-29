import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ActivitiesCategoriesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Adventure Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From heart-pounding adrenaline rushes to serene cultural experiences,
            we offer something extraordinary for every type of adventurer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Adrenaline Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="activity-card rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Bungee jumping from Victoria Falls bridge with misty waterfall background"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/5d77bb6ef348519d80ce690ebb398ae6.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Adrenaline Activities</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Heart-pounding adventures including bungee jumping, zip-lining, and white-water rafting.</p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg"
              >
                <Link to="/activities/adrenaline">
                  Explore Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Water Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="activity-card rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                alt="White water rafting on Zambezi River with splashing rapids"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/b9258cf681f25157e73d27ee9f21c136.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water Activities</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Exciting water sports and river adventures on the mighty Zambezi River.</p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg"
              >
                <Link to="/activities/water">
                  Explore Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Air Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="activity-card rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Helicopter flying over Victoria Falls with rainbow in mist"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="https://www.victoriafallstransfers.com/wp-content/uploads/2018/02/helicopter_vic_falls-5-1.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Air Activities</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Breathtaking helicopter flights and microlight adventures over Victoria Falls.</p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg"
              >
                <Link to="/activities/air">
                  Explore Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Safari Adventures */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="activity-card rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                alt="African elephants walking at sunset in Zimbabwe savanna"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/d1d91eda8d847b9705650b1e864487fa.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safari Adventures</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Wildlife encounters in pristine African wilderness and national parks.</p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg"
              >
                <Link to="/activities/safari">
                  Explore Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Cultural Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="activity-card rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Traditional Zimbabwean dancers in colorful costumes performing"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/0734c30960c35c34ddff345e2afba4e3.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Experiences</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Immerse yourself in authentic Zimbabwean culture and traditions.</p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg"
              >
                <Link to="/activities/culture">
                  Explore Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Combo Deals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="activity-card rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Montage of different activities like rafting, safari, and helicopter"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" src="https://images.unsplash.com/photo-1557744583-673aaac7e3ce" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combo Deals</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Get the best value with our bundled packages for the ultimate adventure.</p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg"
              >
                <Link to="/activities/combo">
                  Explore Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCategoriesSection;