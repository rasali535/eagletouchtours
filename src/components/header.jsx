import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Activities', path: '/activities' },
        { name: 'Contact', path: '/contact' },
    ];

    const activeLinkClass = "text-orange-400";
    const normalLinkClass = "hover:text-orange-400 transition-colors";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
                    Eagle Touch Tours
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `${isActive ? activeLinkClass : normalLinkClass} font-medium`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                        <Link to="/booking">Book Now</Link>
                    </Button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-black bg-opacity-80 absolute top-full left-0 right-0"
                >
                    <nav className="flex flex-col items-center space-y-4 py-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => `${isActive ? activeLinkClass : 'text-white'} text-lg hover:text-orange-400 transition-colors`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-bold mt-4" onClick={() => setIsOpen(false)}>
                            <Link to="/booking">Book Now</Link>
                        </Button>
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Header;