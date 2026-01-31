import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import RoadRollerScene from '../3d/RoadRollerScene';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[90vh] bg-secondary w-full overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
                    <Suspense fallback={null}>
                        <RoadRollerScene />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white pointer-events-none">
                <div className="max-w-2xl pointer-events-auto bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight drop-shadow-xl">
                        Building the <span className="text-primary drop-shadow-md">Future</span> of Construction
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg drop-shadow-md">
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
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-current rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
