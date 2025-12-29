import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Clock, Users, DollarSign, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { activities as allActivities } from '@/data/activities';

const AdrenalineActivities = () => {
  const navigate = useNavigate();
  const adrenalineActivities = allActivities.adrenaline;

  const handleBookNow = (activity) => {
    navigate(`/booking/adrenaline/${activity.id}`);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Adrenaline Activities - Eagle Touch Tours Victoria Falls</title>
        <meta name="description" content="Experience heart-pounding adrenaline activities at Victoria Falls including bungee jumping, gorge swing, zip-lining, and white water rafting with Eagle Touch Tours." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  alt="Adrenaline activities at Victoria Falls" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/5d77bb6ef348519d80ce690ebb398ae6.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-orange-600/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-orange-300">Adrenaline</span> Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed"
          >
            Push your limits with heart-pounding adventures at Victoria Falls
          </motion.p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ultimate <span className="gradient-text">Adrenaline Rush</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the thrill of a lifetime with our carefully selected adrenaline activities, 
              all conducted with the highest safety standards
            </p>
            <p className="text-lg font-semibold text-red-500 mt-4">
              {allActivities.disclaimer}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {adrenalineActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="activity-card rounded-2xl overflow-hidden shadow-xl bg-gray-50 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img  alt={activity.title} className="w-full h-full object-cover" src={activity.image} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">{activity.rating}</span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{activity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-green-500" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2 text-green-500" />
                      <span className="text-sm">Small Groups</span>
                    </div>
                    <div className="flex flex-col items-start text-gray-600">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                        <span className="text-sm font-semibold">${activity.price}</span>
                      </div>
                      <span className="text-[0.6rem] leading-none ml-7">(Excl. Park Fees)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Shield className="h-5 w-5 mr-2 text-green-500" />
                      <span className="text-sm">Safety Certified</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {activity.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleBookNow(activity)}
                    className="w-full mt-auto bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold rounded-lg py-3 text-lg"
                  >
                    Book Now - ${activity.price} (Excl. Park Fees)
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Safety First</span> - Always
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our adrenaline activities are conducted with internationally certified equipment 
              and experienced guides to ensure your safety while maximizing the thrill
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Equipment</h3>
              <p className="text-gray-600">All equipment is internationally certified and regularly inspected</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guides</h3>
              <p className="text-gray-600">Experienced and certified guides with thousands of successful runs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Record</h3>
              <p className="text-gray-600">An unblemished safety record across all our high-adventure activities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdrenalineActivities;