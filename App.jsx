import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Activities from '@/pages/Activities';
import Tours from '@/pages/Tours';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Booking from '@/pages/Booking';
import AdrenalineActivities from '@/pages/activities/AdrenalineActivities';
import WaterActivities from '@/pages/activities/WaterActivities';
import AirActivities from '@/pages/activities/AirActivities';
import Safari from '@/pages/activities/Safari';
import CultureTour from '@/pages/activities/CultureTour';
import ComboDeals from '@/pages/activities/ComboDeals';
import BookingForm from '@/components/BookingForm';
import { useToast } from '@/components/ui/use-toast';

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [bookingActivity, setBookingActivity] = useState({ name: 'General Inquiry', price: '0' });
  const { toast } = useToast();

  const handleOpenBookingForm = (activity) => {
    if (activity && activity.name) {
      setBookingActivity(activity);
    } else {
      setBookingActivity({ name: 'General Inquiry', price: '0' });
    }
    setIsBookingFormOpen(true);
  };

  const handleCloseBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  const createMailtoLink = (data) => {
    const subject = `Booking Inquiry: ${data.activityName || data.name}`;
    const body = `
New Booking Request from Eagle Touch Tours:
------------------------------------------
Activity/Service: ${data.activityName || 'General Inquiry'}
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
    const mailtoLink = createMailtoLink(bookingData);
    window.location.href = mailtoLink;

    toast({
      title: "Confirm Your Booking",
      description: "Your email app has been opened to send your booking request. Please press send to confirm.",
    });

    handleCloseBookingForm();
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Eagle Touch Tours - Victoria Falls Adventure Tours</title>
        <meta name="description" content="Experience unforgettable adventures in Victoria Falls, Zimbabwe with Eagle Touch Tours. Discover thrilling activities, cultural experiences, and nature safaris." />
      </Helmet>
      <Navbar onBookNowClick={() => handleOpenBookingForm()} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onBookNowClick={() => handleOpenBookingForm()} />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/services" element={<Services onBookNowClick={handleOpenBookingForm} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:category/:activityId" element={<Booking />} />
          <Route path="/activities/adrenaline" element={<AdrenalineActivities />} />
          <Route path="/activities/water" element={<WaterActivities />} />
          <Route path="/activities/air" element={<AirActivities />} />
          <Route path="/activities/safari" element={<Safari />} />
          <Route path="/activities/culture" element={<CultureTour />} />
          <Route path="/activities/combo" element={<ComboDeals />} />
        </Routes>
      </main>
      <Footer />
       {isBookingFormOpen && (
        <BookingForm
          activity={bookingActivity}
          onClose={handleCloseBookingForm}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
}

export default App;
