import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WelcomeSection = ({ isAboutPreview = false }) => {
  const content = {
    welcome: {
      image: "https://www.victoriafalls-guide.net/images/jet-boat-birding-2.png",
      alt: "Local villagers smiling and interacting with tourists",
      title: "Welcome to Eagle Touch Tours",
      subtitle: "Your Gateway to Unforgettable Adventures",
      paragraphs: [
        "At Eagle Touch Tours, we believe that travel is about more than just visiting a new place; it’s about creating lasting memories, experiencing new cultures, and embarking on adventures that thrill and inspire. Based in the heart of Victoria Falls, Zimbabwe, we specialize in crafting personalized tour experiences that showcase the breathtaking beauty and vibrant spirit of our homeland.",
        "Our team of passionate and experienced local guides are dedicated to making your journey exceptional. We offer a wide range of activities, from adrenaline-pumping bungee jumps to serene sunset cruises on the Zambezi River. Whether you're seeking a close encounter with wildlife on a safari or a deep dive into local traditions, we have an adventure waiting for you."
      ],
      link: "/about",
      linkText: "Learn More About Us"
    },
    about: {
      image: "https://horizons-cdn.hostinger.com/19c23248-86e6-409e-9325-999a67ea0640/56b04125d29e5ea4ff22d5d29096275b.jpg",
      alt: "African Fish Eagle in flight over water",
      title: "About Eagle Touch Tours",
      subtitle: "Passionate Local Experts",
      paragraphs: [
        "Founded by a team of local experts with a deep love for Zimbabwe's natural wonders and cultural heritage, Eagle Touch Tours is committed to providing authentic and sustainable travel experiences. Our mission is to share the magic of Victoria Falls with the world, while supporting our local community and preserving the pristine environment for generations to come.",
        "We pride ourselves on our attention to detail, personalized service, and commitment to safety and quality. Let us be your trusted partner in exploring one of the Seven Natural Wonders of the World."
      ],
      link: "/about",
      linkText: "Discover Our Story"
    }
  };

  const currentContent = isAboutPreview ? content.about : content.welcome;
  const imageSide = isAboutPreview ? 'right' : 'left';

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className={`flex flex-wrap items-center -mx-4 ${imageSide === 'right' ? 'flex-row-reverse' : ''}`}>
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: imageSide === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-xl shadow-2xl"
            >
              <img src={currentContent.image} alt={currentContent.alt} className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
              <p className="text-lg text-orange-600 font-semibold mb-6">{currentContent.subtitle}</p>
              {currentContent.paragraphs.map((text, index) => (
                <p key={index} className="text-gray-600 mb-4 leading-relaxed">{text}</p>
              ))}
              <Button asChild className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                <Link to={currentContent.link}>
                  {currentContent.linkText}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;