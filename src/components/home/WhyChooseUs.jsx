import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Users, Award } from 'lucide-react';

const stats = [
    { label: 'Years Experience', value: '20+', icon: <Award size={32} /> },
    { label: 'Global Clients', value: '500+', icon: <Globe size={32} /> },
    { label: 'Projects Completed', value: '1200+', icon: <ShieldCheck size={32} /> },
    { label: 'Expert Team', value: '50+', icon: <Users size={32} /> },
];

const features = [
    {
        title: 'Industry Expertise',
        desc: 'Deep understanding of Cement & Mining sectors with tailored machinery solutions.',
    },
    {
        title: 'Global Supply Chain',
        desc: 'Robust logistics network ensuring timely delivery of equipment worldwide.',
    },
    {
        title: 'After-Sales Support',
        desc: 'Comprehensive maintenance, spare parts, and on-site technical assistance.',
    },
    {
        title: 'Cost-Effective',
        desc: 'Competitive pricing without compromising on quality or performance.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold font-heading text-secondary mb-6">
                            Why Choose <span className="text-primary">Esscons</span>?
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            We provide different types of services across all over Odisha according to the customer's requirements. We are one Esscons team committed to Odisha's excellence as a customer-focused equipment supplier
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Abstract Visual / Stats */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className={`${idx % 2 === 0 ? 'translate-y-0' : 'translate-y-8'} bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:border-primary transition-colors`}
                                >
                                    <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                                    <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                                    <div className="text-gray-500 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
