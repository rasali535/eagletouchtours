import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Clock, Users, DollarSign, Star, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import BookingForm from '@/components/BookingForm';
import { activities as allActivities } from '@/data/activities.js';
import { useNavigate } from 'react-router-dom';

const WaterActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const waterActivities = allActivities.water;

  const handleBookNow = (activity) => {
    navigate(`/booking/water/${activity.id}`);
  };

  const createMailtoLink = (data) => {
    const subject = `Booking Inquiry: ${data.activityName} - ${data.name}`;
    const body = `
New Booking Request:
----------------------
Activity: ${data.activityName}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Date: ${data.date}
Participants: ${data.participants}
Special Requests: ${data.specialRequests || 'None'}
    `;
    return `mailto:reservations@eagletouchtours.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  const handleBookingSubmit = (bookingData) => {
    const dataWithActivity = { ...bookingData, activityName: selectedActivity.title };
    const mailtoLink = createMailtoLink(dataWithActivity);
    window.location.href = mailtoLink;

    toast({
      title: "Confirm Your Booking",
      description: "Your email app has been opened to send your booking request. Please press send to confirm.",
    });

    setSelectedActivity(null);
  };

  const activityCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Water Activities - Eagle Touch Tours Zambezi River Adventures</title>
        <meta name="description" content="Experience exciting water activities on the Zambezi River including white water rafting, sunset cruises, Livingstone Island tours, and more with Eagle Touch Tours." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img   
            alt="Zambezi River water activities"
            className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/b9258cf681f25157e73d27ee9f21c136.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-teal-600/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-cyan-300">Water</span> Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed"
          >
            Discover the magic of the Zambezi River with our exciting water adventures
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
              Zambezi River <span className="gradient-text">Adventures</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From thrilling white water rapids to exclusive island tours and peaceful sunset cruises, 
              experience the mighty Zambezi River in all its glory.
            </p>
            <p className="text-lg font-semibold text-red-500 mt-4">
              {allActivities.disclaimer}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {waterActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                variants={activityCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="activity-card rounded-2xl overflow-hidden shadow-xl bg-gray-50 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img   
                    alt={activity.title}
                    className="w-full h-full object-cover" src={activity.image} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">4.8+</span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{activity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-blue-500" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2 text-blue-500" />
                      <span className="text-sm">Small Groups</span>
                    </div>
                    <div className="flex flex-col items-start text-gray-600">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                        <span className="text-sm font-semibold">${activity.price}</span>
                      </div>
                      <span className="text-[0.6rem] leading-none ml-7">(Excl. Park Fees)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Waves className="h-5 w-5 mr-2 text-blue-500" />
                      <span className="text-sm">Water Adventure</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleBookNow(activity)}
                    className="w-full mt-auto bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-lg py-3 text-lg"
                  >
                    Book Now - ${activity.price} (Excl. Park Fees)
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* River Info Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Mighty <span className="gradient-text">Zambezi River</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Zambezi River is Africa's fourth-longest river and offers some of the world's 
              best water-based adventures right at Victoria Falls
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">World-Class Rapids</h3>
              <p className="text-gray-600">Experience Grade 4-5 rapids that challenge even experienced rafters</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wildlife Encounters</h3>
              <p className="text-gray-600">Spot hippos, crocodiles, elephants, and over 400 bird species</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scenic Beauty</h3>
              <p className="text-gray-600">Enjoy breathtaking gorge scenery and stunning African sunsets</p>
            </div>
          </div>
        </div>
      </section>

      {selectedActivity && (
        <BookingForm
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
};

export default WaterActivities;