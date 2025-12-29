import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Award, Users, MapPin, Heart, Shield, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Adventure',
      description: 'We live and breathe adventure, bringing that passion to every tour we create.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority with certified guides and equipment.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of your travel experience.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Our local knowledge ensures authentic and meaningful experiences.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Eagle Touch Tours - Victoria Falls Tour Company</title>
        <meta name="description" content="Learn about Eagle Touch Tours, a premier travel agency in Victoria Falls, Zimbabwe. Discover our story, values, and commitment to unforgettable adventures." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  alt="Eagle Touch Tours team at Victoria Falls" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1648510398515-c4a7bda2d544" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-orange-300">Eagle Touch Tours</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl leading-relaxed"
          >
            Exploring Victoria Falls and Beyond, Where Adventure Meets Serenity
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Eagle Touch Tours is a premier travel agency based in Victoria Falls, Zimbabwe, 
                dedicated to providing unforgettable travel experiences for our clients. Founded 
                with a passion for showcasing the natural beauty and rich culture of Zimbabwe, 
                we have been creating memories for travelers from around the world.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in crafting unique travel and tour experiences that showcase 
                the beauty and adventure of Victoria Falls and its surroundings. From thrilling 
                adrenaline activities to peaceful cultural immersions, we offer something for 
                every type of traveler.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, safety, and authentic experiences has made us 
                one of the most trusted tour operators in the region. We believe that travel 
                should be transformative, and we're here to make that happen for you.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Victoria Falls landscape with wildlife" className="w-full h-96 object-cover" src="https://www.guycoheleachart.com/wp-content/uploads/2017/10/VictoriaFalls-1.jpg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and ensure every adventure 
              with Eagle Touch Tours exceeds your expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-xl">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-xl">Happy Travelers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-xl">Tour Destinations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-xl">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;