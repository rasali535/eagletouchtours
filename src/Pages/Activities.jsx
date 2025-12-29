import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DownloadPriceListButton from '@/components/DownloadPriceListButton';
import { activities as activitiesData } from '@/data/activities';

const Activities = () => {
  const activities = [
    {
      title: 'Adrenaline Activities',
      description: 'Experience heart-pounding adventures including bungee jumping, zip-lining, and white-water rafting on the mighty Zambezi River.',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/5d77bb6ef348519d80ce690ebb398ae6.jpg',
      link: '/activities/adrenaline',
      highlights: ['Bungee Jumping', 'Zip-lining', 'Rafting', 'Gorge Swing']
    },
    {
      title: 'Water Activities',
      description: 'Dive into exciting water sports. From thrilling rapids to peaceful sunset cruises, the Zambezi River offers unforgettable experiences.',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/b9258cf681f25157e73d27ee9f21c136.jpg',
      link: '/activities/water',
      highlights: ['Sunset Cruises', 'Canoeing', 'Island Tours', 'Fishing']
    },
    {
      title: 'Air Activities',
      description: 'Soar above Victoria Falls with breathtaking helicopter flights and microlight adventures for stunning aerial views.',
      image: 'https://www.pioneersvicfalls.com/wp-content/uploads/2020/01/Helicopter-Flights-Victoria-Falls-1210x423.jpg',
      link: '/activities/air',
      highlights: ['Helicopter Flights', 'Microlight Flights', 'Scenic Tours', 'Photo Flights']
    },
    {
      title: 'Safari Adventures',
      description: 'Embark on wildlife encounters in pristine African wilderness. Explore national parks and see the Big Five in their natural habitat.',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/d1d91eda8d847b9705650b1e864487fa.jpg',
      link: '/activities/safari',
      highlights: ['Game Drives', 'Walking Safaris', 'Night Drives', 'Bird Watching']
    },
    {
      title: 'Cultural Experiences',
      description: 'Immerse yourself in authentic Zimbabwean culture. Visit local communities and experience the rich heritage of the region.',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/0734c30960c35c34ddff345e2afba4e3.jpg',
      link: '/activities/culture',
      highlights: ['Village Tours', 'Traditional Dances', 'Craft Markets', 'Local Cuisine']
    },
    {
      title: 'Combo Deals',
      description: 'Perfect packages combining multiple adventures for the ultimate Victoria Falls experience and the best value.',
      image: 'https://vicfallscarnival.com/wp-content/uploads/2021/08/zambezi-sundowner-cruise_0-1.jpg',
      link: '/activities/combo',
      highlights: ['Multi-Activity', 'Best Value', 'Customizable', 'All-Inclusive']
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Activities - Eagle Touch Tours Victoria Falls Adventures</title>
        <meta name="description" content="Discover all adventure activities at Victoria Falls with Eagle Touch Tours. From adrenaline activities to cultural experiences, find your perfect adventure." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Victoria Falls activities collage"
            className="w-full h-full object-cover"
            src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/ed63a1fa8d9c89cef947832892a70d3c.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-orange-300">Adventure Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed mb-8"
          >
            Choose from our exciting range of activities and create unforgettable memories
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <DownloadPriceListButton />
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 italic mb-12">
            {activitiesData.disclaimer}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="activity-card rounded-2xl overflow-hidden shadow-xl flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    src={activity.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{activity.title}</h3>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg flex-grow">{activity.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {activity.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full mt-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg py-3 text-lg"
                  >
                    <Link to={activity.link}>
                      Explore & Book <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Can't Decide? Let Us Help!
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Our expert team can help you choose the perfect combination of activities
              based on your interests, time, and adventure level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Link to="/contact">
                  Get Personalized Recommendations
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Link to="/activities/combo">
                  View Combo Deals
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Activities;