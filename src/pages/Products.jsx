import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import { allProducts, categories } from '../data/products';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = allProducts.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.model.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold font-heading text-secondary mb-4">Our Products</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our comprehensive range of high-performance construction machinery designed to meet the rigorous demands of your projects.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <div className="flex bg-white p-1 rounded-full shadow-sm overflow-x-auto max-w-full">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                    ? 'bg-primary text-secondary shadow-md'
                                    : 'text-gray-600 hover:text-secondary hover:bg-gray-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search model or name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="h-full flex flex-col group p-0">
                                    <div className="relative overflow-hidden h-48 bg-gray-200">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" />
                                        <div className="absolute inset-0 bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Button variant="white" className="text-sm px-4 py-2">View Specs</Button>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold text-secondary text-lg">{product.name}</h3>
                                                <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
                                            </div>
                                            <span className="bg-primary/20 text-secondary text-xs font-bold px-2 py-1 rounded">
                                                {product.model}
                                            </span>
                                        </div>
                                        {/* Description for new items */}
                                        {product.desc && (
                                            <p className="text-xs text-gray-500 mb-2 line-clamp-3" title={product.desc}>
                                                {product.desc}
                                            </p>
                                        )}
                                        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                                            <span className="text-gray-600">Spec:</span>
                                            <span className="font-medium text-secondary">{product.specs}</span>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No products found matching your criteria.
                    </div>
                )}

            </div>
        </div>
    );
};

export default Products;
