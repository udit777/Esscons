import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-6">
                    Ready to Upgrade Your Operations?
                </h2>
                <p className="text-secondary/80 text-lg max-w-2xl mx-auto mb-10">
                    Get in touch with us today to discuss your machinery requirements and get a custom quote tailored to your project needs.
                </p>
                <div className="flex justify-center gap-4 flex-col sm:flex-row">
                    <Link to="/contact">
                        <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg">
                            Contact Us Today
                        </Button>
                    </Link>
                    <Link to="/products">
                        <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg border-secondary text-secondary hover:bg-secondary hover:text-white">
                            View Catalog <ArrowRight size={20} />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
