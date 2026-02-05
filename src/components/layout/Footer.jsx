import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 items-start">
                    {/* Column 1: Company Info */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold font-heading mb-6 text-primary">Esscons</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                            Demonstrating social responsibility and technical leadership in the industry by further developing our position as a leading supplier of environmentally friendly technologies. Constantly growing and improving
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-colors"><Instagram size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <div className="w-12 h-px bg-primary/50 mb-8"></div> {/* Top yellow line accent */}
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Mission & Vision', path: '/mission-vision' },
                                { name: 'Products', path: '/products' },
                                { name: 'Gallery', path: '/gallery' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-3 text-sm">
                                        <span className="text-primary">•</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <div className="w-12 h-px bg-primary/50 mb-8"></div> {/* Top yellow line accent */}
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-4 text-gray-300">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <span>Esscons Pr- Sahadev Sahu, Plot No D/2, Mancheswar Ind Estate, Bhubaneswar</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-300">
                                <Phone className="text-primary shrink-0" size={20} />
                                <div className="flex flex-col">
                                    <span className="hover:text-primary">(0674) 2587826(O)</span>
                                    <span className="hover:text-primary">Mobile: 9937070707</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 text-gray-300">
                                <Mail className="text-primary shrink-0" size={20} />
                                <a href="mailto:sahadevsahu@esscons.com" className="hover:text-primary">sahadevsahu@esscons.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Esscons Construction Machineries. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
