import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Clock, Users, DollarSign, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import BookingForm from '@/components/BookingForm';
import { activities as allActivities } from '@/data/activities';
import { useNavigate } from 'react-router-dom';

const CultureTour = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const activities = allActivities.culture;

  const handleBookNow = (activity) => {
    navigate(`/booking/culture/${activity.id}`);
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
        <title>Cultural Experiences - Eagle Touch Tours Zimbabwe Culture</title>
        <meta name="description" content="Immerse yourself in authentic Zimbabwean culture with village tours, traditional dances, craft workshops, and cuisine experiences with Eagle Touch Tours." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            alt="Traditional Zimbabwean cultural celebration"
            className="w-full h-full object-cover"
           src="https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/0734c30960c35c34ddff345e2afba4e3.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-pink-300">Cultural</span> Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed"
          >
            Immerse yourself in the rich traditions and vibrant culture of Zimbabwe
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
              Authentic <span className="gradient-text">Cultural Immersion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with the heart and soul of Zimbabwe through meaningful cultural 
              experiences that celebrate local traditions, arts, and way of life
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
                    <span className="text-sm font-semibold">{activity.rating}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
                  
                  {/* Activity Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-purple-500" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2 text-purple-500" />
                      <span className="text-sm">Small Groups</span>
                    </div>
                    <div className="flex flex-col items-start text-gray-600">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-purple-500" />
                        <span className="text-sm font-semibold">${activity.price}</span>
                      </div>
                      <span className="text-[0.6rem] leading-none ml-7">(Excl. Park Fees)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Heart className="h-5 w-5 mr-2 text-purple-500" />
                      <span className="text-sm">Cultural Experience</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {activity.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleBookNow(activity)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg py-3 text-lg"
                  >
                    Book Now - ${activity.price} (Excl. Park Fees)
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Info Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Rich <span className="gradient-text">Zimbabwean Heritage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zimbabwe's cultural heritage spans thousands of years, with diverse traditions, 
              languages, and customs that continue to thrive in modern communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Living Traditions</h3>
              <p className="text-gray-600">Experience traditions that have been passed down through generations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Connection</h3>
              <p className="text-gray-600">Meet local people and learn about their daily lives and customs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Experiences</h3>
              <p className="text-gray-600">Genuine cultural exchanges that respect and celebrate local heritage</p>
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

export default CultureTour;