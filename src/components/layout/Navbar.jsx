import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Always use the "scrolled" style (light background) to match the reference image
    // limiting transparency/blur to just a subtle effect or solid white if preferred
    const navbarClasses = 'bg-gray-100/95 backdrop-blur-md shadow-sm py-3';

    // Active link style handling
    const getLinkClasses = (path) => {
        const isActive = location.pathname === path;
        return `relative text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-700'}`;
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Mission & Vision', path: '/mission-vision' },
        { name: 'Why Esscons', path: '/why-us' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarClasses}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-1 group">
                    <span className="text-2xl font-heading font-bold text-secondary">
                        Esscons
                    </span>
                    <div className="h-2 w-2 bg-primary rounded-full mb-1" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={getLinkClasses(link.path)}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary"
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="px-6 py-2 rounded-full font-medium text-sm transition-all hover:shadow-lg bg-secondary text-white hover:bg-opacity-90"
                    >
                        Get Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-secondary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-800'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-secondary text-white text-center py-3 rounded-lg font-medium"
                            >
                                Get Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
