import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const images = [
        "/products/static-road-roller-new.png",
        "/products/concrete-mixer-blue.png",
        "/products/vibratory-road-roller-yellow.png",
        "/products/crawler-excavator-red.png",
        "/products/wheel-loader.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="bg-secondary min-h-[90vh] flex flex-col lg:flex-row items-stretch overflow-hidden relative">
            {/* Left Side: Text Content (Centered with padding) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-12 lg:pl-32 lg:pr-16 py-12 lg:py-0 relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight drop-shadow-sm text-white">
                    Building the <span className="text-white drop-shadow-md">Future</span> of Construction
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                    Authorized dealers of world-class construction machinery.
                    Reliable, efficient, and built for the toughest terrains.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/products">
                        <Button variant="primary" className="w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                            Explore Products <ArrowRight size={20} />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-secondary shadow-lg">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Right Side: Full Bleed Image Slider */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:h-auto overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt="Construction Machinery"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                {/* Gradient Overlay for seamless transition */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default Hero;
