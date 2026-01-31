import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <FeaturedProducts />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </div>
    );
};

export default Home;
