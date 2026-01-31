import { motion } from 'framer-motion';
import { Calendar, Users, Award, Target } from 'lucide-react';

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

            {/* Intro Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold font-heading mb-2">Our Mission</h3>
                            <p className="text-gray-600">To provide world-class construction machinery solutions that empower infrastructure growth.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold font-heading mb-2">Our Values</h3>
                            <p className="text-gray-600">Integrity, Quality, and Commitment are the cornerstones of our business operations.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold font-heading mb-2">Our People</h3>
                            <p className="text-gray-600">A dedicated team of experts ensuring seamless service and support for our clients.</p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold font-heading text-center mb-12">Our Journey</h2>
                        <div className="relative border-l-4 border-primary/20 ml-4 md:ml-1/2 space-y-12">
                            {timelineEvents.map((event, idx) => (
                                <motion.div
                                    key={event.year}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-[-21px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md z-10" />

                                    {/* Content */}
                                    <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-primary/50 transition-colors">
                                            <span className="text-primary font-bold text-lg block mb-1">{event.year}</span>
                                            <h3 className="text-xl font-bold font-heading mb-2">{event.title}</h3>
                                            <p className="text-gray-600 text-sm">{event.desc}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold font-heading text-center mb-12">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md group">
                                <div className="h-64 overflow-hidden">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold font-heading mb-1">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
