// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-grow">
                <Outlet /> {/* This is where child routes will render */}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;