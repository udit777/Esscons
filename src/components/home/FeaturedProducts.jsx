import { motion } from 'framer-motion';
import { ArrowRight, Box, Settings, Truck } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

import { allProducts } from '../../data/products';

// Select first 3 products from the centralized list for the featured section
const products = allProducts.slice(0, 3).map(p => ({
    ...p,
    specs: p.specs ? [p.specs] : [] // Ensure specs is an array for the card loop
}));

const FeaturedProducts = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold font-heading text-secondary mb-4"
                    >
                        Our Products
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Why not give one of these popular Machines a look? In marketing, a product is anything that can be offered to a market that might satisfy a want or need. In retailing products are called merchandise. In manufacturing.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Card
                            key={product.id}
                            className="p-6 flex flex-col items-center text-center group"
                        >
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                            </div>

                            <h3 className="text-xl font-bold font-heading text-secondary mb-2">{product.name}</h3>
                            <p className="text-sm font-medium text-primary mb-4">{product.model}</p>
                            <p className="text-gray-600 mb-6 flex-grow">{product.desc}</p>

                            <div className="flex gap-2 mb-6 flex-wrap justify-center">
                                {product.specs.map(spec => (
                                    <span key={spec} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                        {spec}
                                    </span>
                                ))}
                            </div>

                            <Button variant="outline" className="w-full">
                                View Details
                            </Button>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="primary">
                        View All Products <ArrowRight size={18} />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
