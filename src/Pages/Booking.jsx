import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { activities } from '@/data/activities';
import { Calendar as CalendarIcon, Users } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const Booking = () => {
    const { category, activityId } = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [activity, setActivity] = useState(null);
    const [numPeople, setNumPeople] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedActivities, setSelectedActivities] = useState({});

    useEffect(() => {
        if (category && activityId && activities[category]) {
            const foundActivity = activities[category].find(act => act.id === activityId);
            if (foundActivity) {
                setActivity(foundActivity);
            } else {
                navigate('/activities');
            }
        } else if (!category && !activityId) {
            setActivity({ title: "General Inquiry", price: 0, description: "Let us know what you're interested in, and we'll craft the perfect adventure for you!" });
        } else {
            navigate('/activities');
        }
    }, [category, activityId, navigate]);
    
    useEffect(() => {
        if (activity) {
            let total = activity.price * numPeople;
            Object.values(selectedActivities).forEach(cat => {
                Object.values(cat).forEach(act => {
                    if (act.selected) {
                        total += act.price * numPeople;
                    }
                });
            });
            setTotalPrice(total);
        }
    }, [numPeople, activity, selectedActivities]);

    const handleNumPeopleChange = (e) => {
        const count = Math.max(1, parseInt(e.target.value) || 1);
        setNumPeople(count);
    };
    
    const handleActivitySelection = (category, act) => {
        setSelectedActivities(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [act.id]: {
                    ...act,
                    selected: !prev[category]?.[act.id]?.selected
                }
            }
        }));
    };
    
    const createMailtoLink = (data) => {
        const selectedActivitiesText = Object.values(selectedActivities)
            .flatMap(cat => Object.values(cat))
            .filter(act => act.selected)
            .map(act => `- ${act.title} ($${act.price.toFixed(2)})`)
            .join('\n');

        const subject = `Booking Inquiry: ${data.activityTitle} - ${data.name}`;
        const body = `
New Booking Request:
----------------------
Main Activity: ${data.activityTitle}
Additional Activities:
${selectedActivitiesText || 'None'}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Date: ${data.date}
Participants: ${data.people}
Special Requests: ${data.requests || 'None'}
Total Estimated Price: $${totalPrice.toFixed(2)}
        `;
        return `mailto:reservations@eagletouchtours.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.activityTitle = activity.title;

        const mailtoLink = createMailtoLink(data);
        window.location.href = mailtoLink;
        
        toast({
            title: "Confirm Your Booking",
            description: "Your email app has opened to send your booking request. Please press send to confirm.",
        });
        e.target.reset();
        setNumPeople(1);
    };

    if (!activity) {
        return <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="bg-gray-800 text-white">
            <Helmet>
                <title>Book Your Tour - {activity.title}</title>
                <meta name="description" content={`Book your ${activity.title} adventure with Eagle Touch Tours today!`} />
            </Helmet>
            
            <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <div className="absolute inset-0 h-full w-full bg-cover bg-center">
                    <img 
                        alt="Close-up of a booking calendar and pen" 
                        className="w-full h-full object-cover" 
                        src="https://images.unsplash.com/photo-1516728043722-b394cb2f689e" 
                    />
                </div>
                <div className="relative z-20 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Book Your <span className="text-orange-400">Adventure</span>
                    </motion.h1>
                </div>
            </div>
            
            <div className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-2xl"
                >
                    <h2 className="text-3xl font-bold mb-2">Your Selection: <span className="text-orange-400">{activity.title}</span></h2>
                    <p className="text-lg text-gray-400 mb-8">{activity.description}</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="name" className="text-gray-400">Full Name</Label>
                                <Input id="name" name="name" type="text" placeholder="John Doe" required className="bg-gray-800 border-gray-700 text-white mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-gray-400">Email Address</Label>
                                <Input id="email" name="email" type="email" placeholder="you@example.com" required className="bg-gray-800 border-gray-700 text-white mt-2" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="phone" className="text-gray-400">Phone Number</Label>
                                <Input id="phone" name="phone" type="tel" placeholder="+263 12 345 6789" required className="bg-gray-800 border-gray-700 text-white mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="people" className="text-gray-400">Number of People</Label>
                                <div className="relative mt-2">
                                    <Input id="people" name="people" type="number" min="1" value={numPeople} onChange={handleNumPeopleChange} required className="bg-gray-800 border-gray-700 text-white pl-10" />
                                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="date" className="text-gray-400">Preferred Date</Label>
                            <div className="relative mt-2">
                                <Input id="date" name="date" type="date" required className="bg-gray-800 border-gray-700 text-white pl-10" min={new Date().toISOString().split('T')[0]} />
                                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"/>
                            </div>
                        </div>
                        
                        {/* New Activities Selection Section */}
                        <div className="border-t border-gray-700 pt-6">
                            <h3 className="text-xl font-bold text-orange-400 mb-4">Add More Activities to Your Booking</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(activities).map(([catKey, catValue]) => (
                                    catKey !== 'disclaimer' && (
                                        <div key={catKey}>
                                            <h4 className="text-lg font-semibold text-gray-300 mb-2">{catKey.charAt(0).toUpperCase() + catKey.slice(1)}</h4>
                                            <div className="space-y-1">
                                                {catValue.map(act => (
                                                    act.id !== activityId && (
                                                        <div key={act.id} className="flex items-center space-x-2">
                                                            <input
                                                                type="checkbox"
                                                                id={`activity-${act.id}`}
                                                                checked={selectedActivities[catKey]?.[act.id]?.selected || false}
                                                                onChange={() => handleActivitySelection(catKey, act)}
                                                                className="h-4 w-4 text-orange-500 border-gray-600 rounded focus:ring-orange-400"
                                                            />
                                                            <label htmlFor={`activity-${act.id}`} className="text-gray-400">
                                                                {act.title} (<span className="text-orange-400">${act.price}</span>)
                                                            </label>
                                                        </div>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="requests" className="text-gray-400">Special Requests or Other Activities</Label>
                            <Textarea id="requests" name="requests" placeholder="Let us know about any special requirements, or if you're interested in other activities." className="bg-gray-800 border-gray-700 text-white mt-2" />
                        </div>


                        {activity.price > 0 &&
                            <div className="text-right pt-4 border-t border-gray-700">
                                <p className="text-2xl font-bold">Estimated Total: <span className="text-orange-400">${totalPrice.toFixed(2)}</span></p>
                                <p className="text-gray-500 text-sm">This is a booking request. Payment will be processed after confirmation.</p>
                                <p className="text-sm text-gray-400 mt-2 italic">{activities.disclaimer}</p>
                            </div>
                        }

                        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 text-lg transition-transform transform hover:scale-105">
                            Submit Booking Inquiry
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Booking;