import { motion } from 'framer-motion';
import { Target, History, Globe } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const MissionVision = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-secondary text-white pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center justify-center h-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white"
                    >
                        Our Core Values
                    </motion.h1>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 py-20">
                <div className="text-center mb-16">
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Defining who we are and where we are going.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Mission & Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow"
                    >
                        <div className="relative h-64 bg-gray-200 overflow-hidden group">
                            <img
                                src="/assets/mission-vision.png"
                                alt="Mission & Vision"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-pink-500 p-2 text-white shadow-lg pointer-events-none">
                                <Target size={24} />
                            </div>
                        </div>

                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-secondary mb-4">Mission & Vision</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We are one Esscons team committed to Odisha's excellence as a customer-focused equipment supplier and service company, providing competitive and environmentally friendly technologies to the cement and mining industries.
                            </p>
                            <Link to="/contact">
                                <div className="inline-flex bg-pink-500 hover:bg-pink-600 text-white rounded px-2 py-1 items-center justify-center transition-colors">
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Our History */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow"
                    >
                        <div className="relative h-64 bg-gray-200 overflow-hidden group">
                            <img
                                src="/assets/our-history.png"
                                alt="Our History"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-pink-500 p-2 text-white shadow-lg pointer-events-none">
                                <Globe size={24} />
                            </div>
                        </div>

                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-secondary mb-4">Our History</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Sahadev Sahoo founded "Esscon" Construction Machinaries Supplier Company 20 years ago based on the core values of teamwork, integrity and commitment. Today, The company's reach is global, and our people uphold its founder's vision to provide valuable services to clients, Esscon insistence on quality of service, hard work, and responsiveness to client needs remains the company credo and has led to its success in a competitive industry.
                            </p>
                            <Link to="/about">
                                <div className="inline-flex bg-pink-500 hover:bg-pink-600 text-white rounded px-2 py-1 items-center justify-center transition-colors">
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default MissionVision;
