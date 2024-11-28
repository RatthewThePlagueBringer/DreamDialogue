import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">
                    <Link to="/">Dream Dialogue</Link>
                </div>
                <div className="space-x-4">
                    <Link to="/chat" className="text-gray-300 hover:text-white">Chat</Link>
                    <Link to="/postdream" className="text-gray-300 hover:text-white">Post Dream</Link>
                    <Link to="/dreams" className="text-gray-300 hover:text-white">Dreams</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;