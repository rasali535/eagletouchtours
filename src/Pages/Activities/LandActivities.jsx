import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { activities } from '@/data/activities';

const LandActivities = () => {
  // Defensive check to ensure data exists before mapping
  const landTours = activities?.land || [];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Helmet>
        <title>Land Activities - Eagle Touch Tours</title>
        <meta name="description" content="Explore the wild side of Victoria Falls with our land activities. Book game drives, guided tours, and more." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          alt="Elephant family walking in the Zambezi National Park" 
          src="https://images.unsplash.com/photo-1693761669890-a24e16847000" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Land <span className="text-orange-400">Expeditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg mt-2 text-gray-200"
          >
            Discover the rich flora and fauna of Zimbabwe.
          </motion.p>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landTours.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 text-white flex flex-col h-full overflow-hidden shadow-lg hover:border-orange-500/50 transition-colors">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={activity.image || "https://images.unsplash.com/photo-1595872018818-97555653a011"} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-400">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-300 text-base">
                    {activity.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-4 border-t border-gray-700/50">
                  <div className="text-left">
                    <p className="font-bold text-xl">
                      ${activity.price} <span className="text-sm font-normal text-gray-400">/ person</span>
                    </p>
                    <p className="text-gray-400 text-sm">{activity.duration}</p>
                  </div>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full sm:w-auto">
                    <Link to={`/booking/land/${activity.id}`}>Book This Tour</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandActivities;