import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Clock, Users, DollarSign, Star, Gift, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import BookingForm from '@/components/BookingForm';
import { activities as allActivities } from '@/data/activities';
import { useNavigate } from 'react-router-dom';

const ComboDeals = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const activities = [
    {
      id: 'adventure-pass-1',
      name: 'Adventure Pass 1',
      description: 'A Sunset Cruise plus your choice of any two high-thrill activities: Highwire Pass, a 12/13 minute Helicopter flight, or a Night Drive.',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/79/b3/bc.jpg',
      duration: 'Varies',
      groupSize: '1-8 people',
      price: 360,
      rating: 4.9,
      highlights: ['Sunset Cruise', 'Choose 2: Highwire, Heli, Night Drive', 'Ultimate Flexibility'],
      includes: ['Sunset cruise with drinks & snacks', 'Your two chosen activities'],
    },
    {
      id: 'adventure-pass-2',
      name: 'Adventure Pass 2',
      description: 'A Sunset Cruise plus your choice of any two adventure activities: an Elephant Encounter, a solo Zip Line or Gorge Swing, or White Water Rafting.',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/53/04.jpg',
      duration: 'Varies',
      groupSize: '1-8 people',
      price: 300,
      rating: 4.8,
      highlights: ['Sunset Cruise', 'Choose 2: Elephant, Zip/Swing, Rafting', 'Action-Packed'],
      includes: ['Sunset cruise with drinks & snacks', 'Your two chosen activities'],
    },
    {
      id: 'safari-pass-1',
      name: 'Safari Pass 1',
      description: 'A full Chobe Day Trip plus your choice of one high-thrill activity: Highwire Pass, a 12/13 minute Helicopter flight, or a Night Drive.',
      image: 'https://www.visit-victoria-falls.com/wp-content/uploads/2018/05/Victoria-Falls-Chobe-Day-Trip.jpg',
      duration: 'Varies',
      groupSize: '1-8 people',
      price: 326,
      rating: 4.9,
      highlights: ['Chobe Day Trip', 'Choose 1: Highwire, Heli, Night Drive', 'Wildlife & Thrills'],
      includes: ['Full day Chobe trip with lunch', 'Your chosen activity'],
    },
    {
      id: 'safari-pass-2',
      name: 'Safari Pass 2',
      description: 'A full Chobe Day Trip plus your choice of one adventure activity: an Elephant Encounter, a solo Zip Line or Gorge Swing, or White Water Rafting.',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/81/3d/3d.jpg',
      duration: 'Varies',
      groupSize: '1-8 people',
      price: 290,
      rating: 4.8,
      highlights: ['Chobe Day Trip', 'Choose 1: Elephant, Zip/Swing, Rafting', 'Safari & Adventure'],
      includes: ['Full day Chobe trip with lunch', 'Your chosen activity'],
    },
    {
      id: 'rafting-gorge-swing',
      name: 'Rafting & Gorge Swing',
      description: "Combine the thrill of white water rafting with the heart-stopping gorge swing for a full day of pure adrenaline.",
      image: "https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/f3188ae43c03b58e48933c3c361e3895.jpg",
      duration: 'Full Day',
      groupSize: '1-8 people',
      price: 237,
      rating: 4.9,
      highlights: ['Full Day White Water Rafting', 'Gorge Swing Experience', 'Ultimate Adrenaline Rush'],
      includes: ['Rafting trip with guide and gear', 'Gorge swing jump'],
    },
    {
      id: 'vic-falls-classic',
      name: 'Vic Falls Classic',
      description: 'The essential Victoria Falls experience. A guided tour of the Falls followed by a delicious lunch at the Lookout Cafe with its stunning gorge views.',
      image: 'https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/39a873318ac4e0155c43c452557d2a8a.jpg',
      duration: 'Approx. 4 hours',
      groupSize: '1+',
      price: $59,
      rating: 4.7,
      highlights: ['Guided Falls Tour', 'Lunch at Lookout Cafe', 'Iconic Views', 'Perfect Intro'],
      includes: ['Guided tour of the falls', 'Lunch at Lookout Cafe'],
    },
    {
      id: 'eagle-classic',
      name: 'The Eagle Classic',
      description: 'Our signature package! A Helicopter flight, a guided Falls Tour, and a Sundowner Cruise. Add lunch at the Lookout Cafe for the full experience.',
      image: 'https://www.shearwatervictoriafalls.com/wp-content/uploads/2021/06/helicopter-main.jpg',
      duration: 'Full Day',
      groupSize: '1+',
      price: 250,
      rating: 5.0,
      highlights: ['Helicopter Flight', 'Falls Tour', 'Sundowner Cruise', 'Signature Package'],
      includes: ['12/13 min Helicopter Flight', 'Guided Falls Tour', 'Sunset Cruise'],
    }
  ];

  const handleBookNow = (activity) => {
    navigate(`/booking/combo/${activity.id}`);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Combo Deals - Eagle Touch Tours Victoria Falls Package Deals</title>
        <meta name="description" content="Save money with our Victoria Falls combo packages! Combine multiple activities for the best value including adventure, cultural, and family packages with Eagle Touch Tours." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            alt="Victoria Falls combo activities montage"
            className="w-full h-full object-cover"
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/8f/06/54/victoria-falls-pictures.jpg?w=500&h=-1&s=1" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-emerald-300">Combo</span> Deals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed"
          >
            Maximum adventure, maximum savings - the best of Victoria Falls in one package
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
              Best Value <span className="gradient-text">Adventure Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save money while experiencing more! Our carefully curated combo packages 
              offer the best activities at unbeatable prices
            </p>
            <p className="text-lg font-semibold text-red-500 mt-4">
              {allActivities.disclaimer}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="activity-card rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img  
                    alt={activity.name}
                    className="w-full h-full object-cover"
                   src={activity.image} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">{activity.rating}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-emerald-500" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2 text-emerald-500" />
                      <span className="text-sm">{activity.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Package Includes:</h4>
                    <div className="space-y-2">
                      {activity.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleBookNow(activity)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg py-3 text-lg"
                  >
                    Book Package - ${activity.price} (Excl. Park Fees)
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Combo Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our combo deals offer more than just savings - they provide a complete, 
              well-planned experience that maximizes your time at Victoria Falls
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Value</h3>
              <p className="text-gray-600">Save big compared to booking activities separately</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Time Efficient</h3>
              <p className="text-gray-600">Perfectly planned itineraries that make the most of your visit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Experience</h3>
              <p className="text-gray-600">Carefully curated combinations for the ultimate Victoria Falls adventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedActivity && (
        <BookingForm
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          onSubmit={() => {
            toast({
              title: "🚧 Feature In Progress",
              description: "This booking feature is not yet implemented. You can request it in your next prompt! 🚀",
            });
          }}
        />
      )}
    </div>
  );
};

export default ComboDeals;