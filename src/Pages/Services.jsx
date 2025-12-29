import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Car, Hotel, Users, ArrowRight, Zap, Ship, Truck as Helicopter, Sailboat, PawPrint } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import BookingForm from '@/components/BookingForm';

const TransferCard = ({ transfer, onBook }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
  >
    <div className="relative h-48">
      <img  alt={transfer.title} className="w-full h-full object-cover" src={transfer.imageUrl} />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{transfer.title}</h3>
      <p className="text-2xl font-bold text-green-600 mb-3">US${transfer.price} <span className="text-sm font-normal text-gray-500">PP</span></p>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{transfer.description}</p>
      <Button onClick={() => onBook(transfer)} className="w-full mt-auto bg-green-500 hover:bg-green-600 text-white">Book Transfer</Button>
    </div>
  </motion.div>
);

const HotelCard = ({ hotel, onBook }) => {
    return (
        <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img  alt={hotel.name} className="w-full h-48 object-cover" src={hotel.imageUrl} />
            <div className="p-4">
                <h4 className="font-bold text-lg">{hotel.name}</h4>
                <p className="text-sm text-gray-500">{hotel.location}</p>
                <Button onClick={() => onBook(hotel)} className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                  Book With Eagle Touch
                </Button>
            </div>
        </motion.div>
    );
};

const GroupActivityCard = ({ activity }) => (
    <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
        <div className="bg-purple-200 text-purple-700 p-3 rounded-full">
            <activity.icon className="h-6 w-6" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-800">{activity.name}</h4>
            <p className="text-sm text-gray-600">{activity.description}</p>
        </div>
    </div>
);

const Services = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedActivity, setSelectedActivity] = useState(null);

  const createMailtoLink = (data) => {
    const subject = `Booking Inquiry: ${data.activityName} - ${data.name}`;
    const body = `
New Booking Request from Eagle Touch Tours:
------------------------------------------
Service/Accommodation: ${data.activityName}
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
    const dataWithActivity = { ...bookingData, activityName: selectedActivity.name };
    const mailtoLink = createMailtoLink(dataWithActivity);
    window.location.href = mailtoLink;

    toast({
      title: "Confirm Your Booking",
      description: "Your email app has been opened to send your booking request. Please press send to confirm.",
    });

    setSelectedActivity(null);
  };


  const handleBookTransfer = (transfer) => {
    setSelectedActivity({
        name: `${transfer.title} Transfer`,
        price: `${transfer.price}`,
        duration: 'N/A',
        groupSize: '1-8',
        rating: 'N/A'
    });
  };

  const handleBookHotel = (hotel) => {
    setSelectedActivity({
        name: `${hotel.name} Accommodation`,
        price: '0', // No price for hotel inquiry
        duration: 'N/A',
        groupSize: '1+',
        rating: 'N/A'
    });
  };

  const transfers = [
    {
      title: 'Victoria Falls Town',
      price: 24,
      description: 'Hassle-free transfers to Victoria Falls Town, ensuring you arrive relaxed.',
      imageUrl: 'https://www.victoriafalls-guide.net/images/wild-horizons-transfers.jpg'
    },
    {
      title: 'Hwange Transfers',
      price: 105,
      description: 'Comfortable and efficient transfers to Hwange Safari lodge with expert drivers.',
      imageUrl: 'https://images.unsplash.com/photo-1585402969048-86f38f8bfc2e'
    },
    {
      title: 'Kasane Transfers (Botswana)',
      price: 80,
      description: 'Transfers from Victoria Falls to Kasane Airport, ensuring you arrive relaxed.',
      imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/ec/e4/ef.jpg'
    },
    {
      title: 'Livingstone Transfers (Zambia)',
      price: 35,
      description: 'Transfers from Victoria Falls to Livingstone Airport, ensuring arrival at your destination.',
      imageUrl: 'https://images.unsplash.com/photo-1623889385479-ced6b7ae4066'
    }
  ];

  const hotels = [
    { name: "Elephant Camp", location: "Victoria Falls", imageUrl: "https://wildhorizons.co.za/wp-content/uploads/2025/04/Home_Page_Luxury-Redefined_Gallery2.jpg", link: "https://wildhorizons.co.za/the-elephant-camp/" },
    { name: "The Waterfalls Lodge", location: "Victoria Falls", imageUrl: "https://wildhorizons.co.za/wp-content/uploads/2025/04/WH_homepage_accomm1.jpg", link: "https://wildhorizons.co.za/waterfalls-lodge/" },
    { name: "The OldDrift", location: "Victoria Falls", imageUrl: "https://wildhorizons.co.za/wp-content/uploads/2024/11/Family-suites-2.webp", link: "https://www.olddriftlodge.com/old-drift-lodge-accommodation/" },
    { name: "The Wallow", location: "Victoria Falls", imageUrl: "https://wallowlodge.com/wp-content/uploads/2022/10/Wallow-Rooms-Main-11_png.jpeg", link: "https://wallowlodge.com/" },
  ];

  const groupActivities = [
      { name: "White Water Rafting", description: "Team-building on the mighty Zambezi.", icon: Ship },
      { name: "Sunset Cruises", description: "Relaxing and scenic cruises for large groups.", icon: Sailboat },
      { name: "Game Drives", description: "Explore the wild with our group safari trucks.", icon: PawPrint },
      { name: "Helicopter Flights", description: "Unforgettable aerial views for your group.", icon: Helicopter },
  ];

  const mainServices = [
    {
      icon: Hotel,
      title: 'Accommodation Booking',
      description: 'We can help you find and book the perfect accommodation for your stay in Victoria Falls. Here are some of our top picks:',
      content: <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {hotels.map(hotel => <HotelCard key={hotel.name} hotel={hotel} onBook={handleBookHotel} />)}
      </div>,
      button: null
    },
    {
      icon: Users,
      title: 'Group Bookings',
      description: 'Special arrangements and discounts for corporate events, family reunions, or any large group. We can arrange exclusive activities like:',
      content: <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {groupActivities.map(activity => <GroupActivityCard key={activity.name} activity={activity} />)}
      </div>,
      button: {
        text: 'Inquire for a Group',
        action: () => handleBookHotel({ name: 'Group Booking Inquiry' })
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Services - Eagle Touch Tours Victoria Falls</title>
        <meta name="description" content="Comprehensive travel services including transfers, accommodation booking, and travel planning for your Victoria Falls adventure." />
      </Helmet>

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Eagle Touch Tours service team" className="w-full h-full object-cover" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/ee/79/97.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-cyan-300">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed"
          >
            Complete travel solutions for your Victoria Falls adventure
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <div className="inline-block bg-blue-500 text-white p-4 rounded-full mb-4">
                    <Car className="h-10 w-10" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Airport Transfers</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Reliable transfers to Victoria Falls town, Hwange, Kasane, and Livingstone for a seamless travel experience.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {transfers.map(transfer => <TransferCard key={transfer.title} transfer={transfer} onBook={handleBookTransfer} />)}
            </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-lg text-gray-600">{service.description}</p>
                </div>
              </div>
              
              {service.content && <div>{service.content}</div>}
              
              {service.button && (
                <Button 
                  onClick={service.button.action}
                  className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold text-lg py-3 px-6 rounded-lg"
                >
                  {service.button.text} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Custom Travel Solutions?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Our experienced team can create personalized travel packages that combine 
              activities, accommodation, and services tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Link to="/contact">Contact Our Team</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Link to="/activities">View Activities</Link>
              </Button>
            </div>
          </motion.div>
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

export default Services;