import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Clock, Users, DollarSign, Star, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import BookingForm from '@/components/BookingForm';
import { activities as allActivities } from '@/data/activities';
import { useNavigate } from 'react-router-dom';

const AirActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const { toast } = useToast();
  const activities = allActivities.air;
  const navigate = useNavigate();

  const handleBookNow = (activity) => {
    navigate(`/booking/air/${activity.id}`);
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

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Air Activities - Eagle Touch Tours Victoria Falls Helicopter Flights</title>
        <meta name="description" content="Experience breathtaking aerial views of Victoria Falls with helicopter flights and microlight adventures. Book your Flight of Angels with Eagle Touch Tours." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            alt="Aerial view of Victoria Falls from helicopter"
            className="w-full h-full object-cover"
           src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/26c172f47dbadcd65157c0a2da4ce331.png" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 to-purple-600/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-sky-300">Air</span> Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed"
          >
            Soar above Victoria Falls and witness nature's masterpiece from the sky
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
              Flight of <span className="gradient-text">Angels</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Victoria Falls from a bird's eye view with our spectacular 
              helicopter and microlight flights over one of the world's greatest natural wonders
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
                    alt={activity.title}
                    className="w-full h-full object-cover"
                   src={activity.image} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
                  
                  {/* Activity Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-sky-500" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2 text-sky-500" />
                      <span className="text-sm">Small Groups</span>
                    </div>
                    <div className="flex flex-col items-start text-gray-600">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-sky-500" />
                        <span className="text-sm font-semibold">${activity.price}</span>
                      </div>
                      <span className="text-[0.6rem] leading-none ml-7">(Excl. Park Fees)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Plane className="h-5 w-5 mr-2 text-sky-500" />
                      <span className="text-sm">Aerial Adventure</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleBookNow(activity)}
                    className="w-full bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white font-semibold rounded-lg py-3 text-lg"
                  >
                    Book Now - ${activity.price} (Excl. Park Fees)
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Info Section */}
      <section className="py-20 bg-gradient-to-r from-sky-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Aerial Adventures</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our aerial activities offer unique perspectives of Victoria Falls that can only 
              be experienced from the sky, creating memories that last a lifetime
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unique Perspective</h3>
              <p className="text-gray-600">See the full width and power of Victoria Falls from above</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Pilots</h3>
              <p className="text-gray-600">Experienced pilots with thousands of flight hours over the falls</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Photography</h3>
              <p className="text-gray-600">Capture stunning aerial photos and videos of the falls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
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

export default AirActivities;