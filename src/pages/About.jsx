import { motion } from 'framer-motion';
import { Calendar, Users, Award, Target, CheckCircle } from 'lucide-react';

const timelineEvents = [
    { year: '2004', title: 'Esscons Founded', desc: 'Established by Sahadev Sahoo with a vision to transform the construction machinery landscape in Odisha.' },
    { year: '2008', title: 'Expanded to Mining', desc: 'Diversified operations to serve the growing mining sector in Eastern India.' },
    { year: '2012', title: 'Global Dealerships', desc: 'Secured exclusive partnerships with top international machinery brands.' },
    { year: '2018', title: 'Safety Awards', desc: 'Recognized for outstanding contribution to industrial safety standards.' },
    { year: '2024', title: '20 Years of Excellence', desc: 'Celebrating two decades of trust, innovation, and customer service.' },
];

const teamMembers = [
    { name: 'Sahadev Sahoo', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80' },
    { name: 'Rajesh Verma', role: 'Operations Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80' },
    { name: 'Anita Das', role: 'Head of Sales', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80' },
];

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-secondary text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6"
                    >
                        About <span className="text-primary">Esscons</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl max-w-3xl mx-auto text-gray-300"
                    >
                        Building trust through quality and commitment since 2004.
                    </motion.p>
                </div>
                {/* Abstract shapes */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full" />
                    <div className="absolute bottom-10 right-10 w-64 h-64 border-4 border-white rounded-full" />
                </div>
            </section>

            {/* Main Content Split Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Story</h2>
                            <h3 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-8 leading-tight">
                                Odisha's Leading Supplier of Cement & Mining Equipment
                            </h3>

                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    As one of Odisha's leading suppliers of cement plant equipment, <span className="font-semibold text-secondary">Esscons</span> offers a full-line of equipment supply and engineering for cement plants, as well as individual machines, equipment packages, and a full range of associated plant services.
                                </p>
                                <p>
                                    The Esscons group is focused on creating strong relationships with customers, suppliers, and employees, within the entire Esscons organization, in order to establish professional, trustworthy, and efficient partnerships.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Equipment Supply', 'Plant Engineering', 'Individual Machines', 'Service Packages'].map(item => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/about-us-hero.png"
                                    alt="About Esscons Abstract"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent pointer-events-none" />
                            </div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary max-w-xs hidden md:block">
                                <p className="text-secondary font-bold text-lg mb-1">20+ Years</p>
                                <p className="text-gray-500 text-sm">Of Industry Excellence and Trust</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-all text-center"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Target size={32} />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-secondary">Our Mission</h3>
                            <p className="text-gray-600">To provide world-class construction machinery solutions that empower infrastructure growth across the region.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-all text-center"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-secondary">Our Values</h3>
                            <p className="text-gray-600">Integrity, Quality, and Commitment are the cornerstones of our business operations and partnerships.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-all text-center"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-secondary">Our People</h3>
                            <p className="text-gray-600">A dedicated team of experts ensuring seamless service, support, and relationship building for our clients.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 overflow-hidden">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold font-heading text-center mb-16">Our Journey</h2>
                    <div className="max-w-4xl mx-auto relative">
                        {/* Center Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

                        <div className="space-y-12">
                            {timelineEvents.map((event, idx) => (
                                <motion.div
                                    key={event.year}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={`relative flex md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Content */}
                                    <div className="ml-12 md:ml-0 md:w-1/2 py-4 md:px-12">
                                        <div className={`
                                            bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary
                                            ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                                        `}>
                                            <span className="text-4xl font-bold text-gray-100 absolute top-2 right-4 z-0 pointer-events-none">{event.year}</span>
                                            <span className="text-primary font-bold text-lg block mb-2 relative z-10">{event.year}</span>
                                            <h3 className="text-xl font-bold font-heading mb-2 relative z-10">{event.title}</h3>
                                            <p className="text-gray-600 text-sm relative z-10">{event.desc}</p>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-[11px] md:left-1/2 top-8 md:-ml-[9px] w-5 h-5 bg-white border-4 border-primary rounded-full z-10" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading mb-4 text-secondary">Leadership Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Meet the experts behind Esscons who drive our vision and excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
                            >
                                <div className="h-72 overflow-hidden relative">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold font-heading mb-1 text-secondary">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
