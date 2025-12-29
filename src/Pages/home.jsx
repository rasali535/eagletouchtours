import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import WelcomeSection from '@/components/home/WelcomeSection';
import StatsSection from '@/components/home/StatsSection';
import ActivitiesCategoriesSection from '@/components/home/ActivitiesCategoriesSection';
import CtaSection from '@/components/home/CtaSection';

const Home = ({ onBookNowClick }) => {
  const activityCategoriesData = [
    {
      title: 'Adrenaline Activities',
      description: 'Heart-pounding thrills and unforgettable rushes.',
      path: '/activities/adrenaline'
    },
    {
      title: 'Water Adventures',
      description: 'Explore the mighty Zambezi River up close.',
      path: '/activities/water'
    },
    {
      title: 'Safari & Wildlife',
      description: 'Encounter Africa\'s iconic animals in their habitat.',
      path: '/activities/safari'
    }
  ];

  const statsData = [
    { icon: 'Users', number: '10,000+', label: 'Happy Travelers' },
    { icon: 'Award', number: '15+', label: 'Years Experience' },
    { icon: 'Star', number: '4.9', label: 'Average Rating' },
    { icon: 'MapPin', number: '50+', label: 'Tour Destinations' }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Eagle Touch Tours - Victoria Falls Adventure Tours & Activities</title>
        <meta name="description" content="Experience the best of Victoria Falls with Eagle Touch Tours. Offering adrenaline activities, water sports, helicopter flights, safaris, and cultural tours in Zimbabwe." />
      </Helmet>

      <HeroSection onBookNowClick={onBookNowClick} activityCategories={activityCategoriesData} />
      <WelcomeSection />
      <StatsSection stats={statsData} />
      <ActivitiesCategoriesSection />
      <WelcomeSection isAboutPreview={true} /> {/* Reusing WelcomeSection for About Preview */}
      <CtaSection onBookNowClick={onBookNowClick} />
    </div>
  );
};

export default Home;