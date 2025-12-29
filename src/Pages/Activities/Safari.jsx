import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Clock, Users, DollarSign, Star, BedDouble, Moon, Sun, Footprints } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { activities as allActivities } from '@/data/activities';

// A simple component to render icons based on string names
const SafariIcon = ({ iconName, className }) => {
  switch (iconName) {
    case 'Sun':
      return <Sun className={className} />;
    case 'Moon':
      return <Moon className={className} />;
    case 'BedDouble':
      return <BedDouble className={className} />;
    case 'Footprints':
      return <Footprints className={className} />;
    case 'Elephant':
      return <Users className={className} />; // Using Users as a placeholder for Elephant
    case 'Horse':
       return <Users className={className} />; // Using Users as a placeholder for Horse
    default:
      return <Sun className={className} />;
  }
};

const Safari = () => {
  const navigate = useNavigate();
  const safariActivities = allActivities.safari;

  const handleBookNow = (activity) => {
    navigate(`/booking/safari/${activity.id}`);
  };

  const getIconDescription = (activity) => {
    switch (activity.icon) {
        case 'Moon': return 'Night Safari & Dinner';
        case 'BedDouble': return 'Overnight Stay';
        case 'Footprints': return 'Walking Safari';
        case 'Elephant': return 'Ethical Encounter';
        case 'Horse': return 'Riding Safari';
        default: return 'Day Safari';
    }
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Safari Adventures - Eagle Touch Tours Wildlife Experiences</title>
        <meta name="description" content="Experience incredible wildlife safaris near Victoria Falls including Chobe National Park, Zambezi National Park game drives, and walking safaris with Eagle Touch Tours." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  alt="African safari with elephants and acacia trees" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/d1d91eda8d847b9705650b1e864487fa.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-orange-600/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-amber-300">Safari</span> Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed"
          >
            Encounter Africa's magnificent wildlife in their natural habitat
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
              Wildlife <span className="gradient-text">Encounters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the incredible wildlife of southern Africa with our expertly guided 
              safari experiences in world-renowned national parks and reserves
            </p>
            <p className="text-lg font-semibold text-red-500 mt-4">
              {allActivities.disclaimer}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {safariActivities.map((activity, index) => (
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
                      <Clock className="h-5 w-5 mr-2 text-amber-500" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2 text-amber-500" />
                      <span className="text-sm">Small Groups</span>
                    </div>
                    <div className="flex flex-col items-start text-gray-600">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-amber-500" />
                        <span className="text-sm font-semibold">${activity.price}</span>
                      </div>
                      <span className="text-[0.6rem] leading-none ml-7">(Excl. Park Fees)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                       <SafariIcon iconName={activity.icon} className="h-5 w-5 mr-2 text-amber-500" />
                      <span className="text-sm">
                        {getIconDescription(activity)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {activity.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleBookNow(activity)}
                    className="w-full mt-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg py-3 text-lg"
                  >
                    Book Now - ${activity.price} (Excl. Park Fees)
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safari;