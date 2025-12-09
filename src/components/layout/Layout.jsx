import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children, title = "Dashboard" }) => {
    return (
        <div className="min-h-screen bg-[#050507] text-white font-sans">
            <Sidebar />
            <Header title={title} />
            <main className="pl-64 pt-16 min-h-screen">
                <div className="p-8 max-w-[1600px] mx-auto animate-fade-in">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
