import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Store contact form submission in localStorage
        const contacts = JSON.parse(localStorage.getItem('eagleTouchContacts') || '[]');
        const newContact = {
            id: Date.now(),
            ...formData,
            createdAt: new Date().toISOString()
        };
        contacts.push(newContact);
        localStorage.setItem('eagleTouchContacts', JSON.stringify(contacts));

        toast({
            title: "Message Sent Successfully!",
            description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Address',
            details: [{ text: 'Train office PARKWAY DR' }, { text: 'Victoria Falls Zimbabwe' }]
        },
        
        {
            icon: Mail,
            title: 'Email',
            details: [{ text: 'reservations@eagletouchtours.com', link: 'mailto:reservations@eagletouchtours.com' }]
        },
        {
            icon: Clock,
            title: 'Hours',
            details: [{ text: 'Mon - Sun: 7:00 AM - 7:00 PM' }, { text: 'Emergency: 24/7' }]
        }
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Contact Us - Eagle Touch Tours Victoria Falls</title>
                <meta name="description" content="Contact Eagle Touch Tours for Victoria Falls adventures. Get in touch for bookings, inquiries, and custom tour arrangements." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Victoria Falls contact and office location"
                        className="w-full h-full object-cover"
                        src="https://images.fineartamerica.com/images-medium-large-5/2-african-fish-eagle-tony-camachoscience-photo-library.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        Contact <span className="text-orange-300">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl leading-relaxed"
                    >
                        Ready to start your Victoria Falls adventure? Get in touch with our team
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Have questions about our activities or need help planning your visit?
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="booking">Activity Booking</option>
                                            <option value="inquiry">General Inquiry</option>
                                            <option value="group">Group Booking</option>
                                            <option value="custom">Custom Tour</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Tell us about your travel plans, questions, or special requirements..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 text-lg font-semibold rounded-lg"
                                >
                                    Send Message <Send className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We're here to help you plan the perfect Victoria Falls adventure.
                                Contact us through any of the methods below.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <info.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-gray-600">
                                                    {detail.link ? (
                                                        <a href={detail.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                            {detail.text}
                                                        </a>
                                                    ) : (
                                                        detail.text
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us</h3>
                                <p className="text-gray-600 mb-4">
                                    We're located in the heart of Victoria Falls, Zimbabwe,
                                    close to all major attractions and accommodations.
                                </p>
                                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <p className="text-gray-500">Interactive Map Coming Soon</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quick answers to common questions about our services
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">How far in advance should I book?</h3>
                            <p className="text-gray-600">We recommend booking at least 2-3 days in advance, especially during peak season (April-October). Some activities like helicopter flights may require earlier booking.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">What should I bring?</h3>
                            <p className="text-gray-600">Comfortable clothing, sun protection, camera, and closed shoes for most activities. We provide all safety equipment and specific gear requirements for each activity.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer group discounts?</h3>
                            <p className="text-gray-600">Yes! We offer special rates for groups of 6 or more people. Contact us for custom group packages and corporate event arrangements.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">What's your cancellation policy?</h3>
                            <p className="text-gray-600">We offer flexible cancellation policies depending on the activity. Most bookings can be cancelled up to 24-48 hours in advance for a full refund.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;