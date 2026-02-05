import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Pink Background */}
            <section className="bg-secondary text-white pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center justify-center h-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white"
                    >
                        About Us
                    </motion.h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-stretch gap-12">

                        {/* Left Column: Graphic (CSS Recreated) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-5/12 relative min-h-[400px] flex items-center justify-center bg-white"
                        >
                            {/* "About Us" Text */}
                            <div className="relative z-10 text-left w-full pr-12">
                                <h2 className="text-6xl md:text-7xl font-bold text-black tracking-tighter">
                                    About <br /> Us
                                </h2>
                            </div>

                            {/* Abstract Blue/Purple Squares Pattern */}
                            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-90">
                                {/* Create a grid of colored squares using CSS */}
                                <div className="grid grid-cols-3 gap-1 transform rotate-0">
                                    {/* Row 1 */}
                                    <div className="w-16 h-16 bg-blue-200/50"></div>
                                    <div className="w-16 h-16 bg-blue-400/50"></div>
                                    <div className="w-16 h-16 bg-indigo-500/50"></div>

                                    {/* Row 2 */}
                                    <div className="w-16 h-16 bg-blue-300/50"></div>
                                    <div className="w-16 h-16 bg-indigo-600/60"></div>
                                    <div className="w-16 h-16 bg-purple-500/50"></div>

                                    {/* Row 3 */}
                                    <div className="w-16 h-16 bg-indigo-400/50"></div>
                                    <div className="w-16 h-16 bg-purple-600/60"></div>
                                    <div className="w-16 h-16 bg-purple-800/50 rounded-br-3xl"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:w-7/12 flex items-center"
                        >
                            <div className="bg-gray-50 p-8 md:p-12 rounded-xl">
                                <p className="text-gray-600 leading-looose text-lg mb-6 text-justify">
                                    As one of the Odisha's leading suppliers of cement plant
                                    equipment, Esscons offers a full-line of equipment supply and
                                    engineering for cement plants, as well as individual machines,
                                    equipment packages, and a full range of associated plant
                                    services. The Esscons group is focused on creating strong
                                    relationships with customers, suppliers, and employees,
                                    within the entire esscons organization, in order to establish
                                    professional, trustworthy, and efficient partnerships.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
