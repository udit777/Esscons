import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "Esscons provided us with top-notch road rollers that significantly improved our project timelines. Their support team is exceptional.",
        author: "Rajesh Kumar",
        role: "Project Manager, UltraTech Cement",
    },
    {
        id: 2,
        text: "Reliable machinery and excellent after-sales service. We have been partnering with Esscons for over 10 years for our mining operations.",
        author: "Amit Singh",
        role: "Operations Head, Vedanta Resources",
    },
    {
        id: 3,
        text: "The durability of their excavators in rough terrain is unmatched. Highly recommended for any large-scale infrastructure projects.",
        author: "Suresh Patel",
        role: "Director, L&T Construction",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((c) => (c + 1) % testimonials.length);
    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-20 bg-secondary text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-4">Client Testimonials</h2>
                    <div className="w-20 h-1 bg-primary mx-auto" />
                </div>

                <div className="max-w-4xl mx-auto relative min-h-[300px] flex items-center justify-center">

                    <button onClick={prev} className="absolute left-0 md:-left-12 p-2 hover:text-primary transition-colors z-20">
                        <ChevronLeft size={32} />
                    </button>

                    <button onClick={next} className="absolute right-0 md:-right-12 p-2 hover:text-primary transition-colors z-20">
                        <ChevronRight size={32} />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="px-8 md:px-16"
                        >
                            <Quote size={48} className="text-primary/30 mx-auto mb-6" />
                            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
                                "{testimonials[current].text}"
                            </p>
                            <div>
                                <div className="font-bold text-lg text-primary">{testimonials[current].author}</div>
                                <div className="text-gray-400">{testimonials[current].role}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === current ? 'bg-primary' : 'bg-gray-600'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
