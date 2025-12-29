import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Map, Bike, Users, Utensils, Drumstick as Drum, TramFront } from 'lucide-react';

const Tours = () => {
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "You can book individual activities through their respective pages.",
    });
  };

  const tours = [
    {
      icon: Map,
      title: 'Tour of Victoria Falls',
      description: 'An unforgettable guided experience through the Victoria Falls rainforest, a journey of approximately 1.7km with stunning viewpoints.',
      price: '$27',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/36efd50df54ba499603f2fa4967d1e7c.webp'
    },
    {
      icon: Bike,
      title: 'Vic Falls Bike Tour',
      description: 'Explore Victoria Falls town and its surroundings on a fun and informative bike tour, visiting local spots and scenic viewpoints.',
      price: '$52',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/72daf5fd8a6c5ba40be1c54cb18b99ac.png'
    },
    {
      icon: Users,
      title: 'Meet the People Village Tour',
      description: 'A cultural journey into a local village to experience the traditional Zimbabwean way of life, interact with residents, and learn about their customs.',
      price: '$78',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/e3cdffbc23dfdf06d59d00b759b2e885.jpg'
    },
    {
      icon: Utensils,
      title: 'Home Hosted Lunch',
      description: 'Enjoy an authentic home-cooked meal with a local family, offering a unique insight into Zimbabwean cuisine and hospitality.',
      price: '$35',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/735dc6226d887470b88c875f4ab7c567.jpg'
    },
    {
      icon: Drum,
      title: 'Boma Dinner & Drum Show',
      description: 'An immersive cultural experience with a buffet of traditional Zimbabwean dishes, interactive drumming, and vibrant dance performances.',
      price: '$60',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/e7d61cf831a9151d1dcf89256ad08425.jpg'
    },
    {
      icon: TramFront,
      title: 'Bamba Tram - Sunset Run',
      description: 'A unique sunset journey on a restored tram, traveling through the national park to the Victoria Falls Bridge for stunning views.',
      price: '$65',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/813c5de871bb14857cc9632e4a4d88ca.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Guided Tours - Eagle Touch Tours Victoria Falls</title>
        <meta name="description" content="Discover our comprehensive tour packages and guided experiences at Victoria Falls, including cultural tours, bike tours, and the famous Boma Dinner." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            alt="Victoria Falls guided tour group"
            className="w-full h-full object-cover"
           src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/36efd50df54ba499603f2fa4967d1e7c.webp" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Guided <span className="text-orange-300">Tours</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed"
          >
            Expert-guided experiences that bring Victoria Falls and its culture to life.
          </motion.p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Featured Tours</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the wonders of Victoria Falls with our expert guides. Each tour is designed to give you a unique and memorable perspective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="activity-card flex flex-col rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img  
                    alt={tour.title}
                    className="w-full h-full object-cover"
                   src={tour.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <tour.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tour.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{tour.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-2xl font-bold text-green-600">{tour.price}</span>
                    <Button 
                      onClick={handleBookNow}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;