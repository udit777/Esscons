import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-hidden">
            <Navbar />
            {/* Only add top padding if NOT on home page, because Home has a full-screen Hero that goes under the Navbar */}
            <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
