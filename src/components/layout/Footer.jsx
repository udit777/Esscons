import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Esscons</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Demonstrating social responsibility and technical leadership in the industry by further developing our position as a leading supplier of environmentally friendly technologies. Constantly growing and improving
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold font-heading mb-6 border-b border-primary/30 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Mission & Vision', 'Products', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-').replace('&', '').replace('--', '-')}`} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-lg font-bold font-heading mb-6 border-b border-primary/30 pb-2 inline-block">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <span>Esscons Pr- Sahadev Sahu, Plot No D/2, Mancheswar Ind Estate, Bhubaneswar</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="text-primary shrink-0" size={20} />
                                <div className="flex flex-col">
                                    <span className="hover:text-primary">(0674) 2587826(O)</span>
                                    <span className="hover:text-primary">Mobile: 9937070707</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
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
