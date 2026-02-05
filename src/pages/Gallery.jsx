import { motion } from 'framer-motion';
import { allProducts } from '../data/products';

const Gallery = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-secondary text-white pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center justify-center h-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white"
                    >
                        Product Gallery
                    </motion.h1>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 py-20">
                <div className="text-center mb-16">
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A visual showcase of our premium construction machinery and equipment in action.
                    </p>
                </div>

                <div className="masonry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{product.name}</h3>
                                    <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{product.model}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
