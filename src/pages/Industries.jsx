import { Hammer, Mountain } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Industries = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <h1 className="text-4xl font-bold font-heading text-secondary mb-6">Industries Served</h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    Excellence in every sector. We provide specialized machinery solutions for major industrial verticals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Cement */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                            <Mountain size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-secondary mb-4">Cement Industry</h2>
                        <p className="text-gray-600 mb-6">
                            From limestone mining to plant operations, our robust loaders and crushers ensure continuous productivity in harsh environments.
                        </p>
                        <ul className="text-left text-sm text-gray-500 space-y-2 mb-8 inline-block">
                            <li>• High-capacity Wheel Loaders</li>
                            <li>• Durable Crushers</li>
                            <li>• Transport Solutions</li>
                        </ul>
                        <Link to="/contact">
                            <Button variant="outline" className="w-full">Get Solutions</Button>
                        </Link>
                    </div>

                    {/* Mining */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                            <Hammer size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-secondary mb-4">Mining Industry</h2>
                        <p className="text-gray-600 mb-6">
                            Extraction made efficient. Our heavy-duty excavators and Dozers are built to handle the toughest ores and terrains.
                        </p>
                        <ul className="text-left text-sm text-gray-500 space-y-2 mb-8 inline-block">
                            <li>• Heavy Excavators (20T - 50T)</li>
                            <li>• Rock Breakers</li>
                            <li>• Articulate Dump Trucks</li>
                        </ul>
                        <Link to="/contact">
                            <Button variant="outline" className="w-full">Get Solutions</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industries;
