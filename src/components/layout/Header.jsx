import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';

const Header = ({ title }) => {
    return (
        <header className="h-16 fixed top-0 right-0 left-64 bg-[rgba(5,5,7,0.8)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] z-40 px-8 flex items-center justify-between">
            <div>
                <h2 className="text-xl font-semibold text-white tracking-wide">{title}</h2>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]" />
                    <input
                        type="text"
                        placeholder="Search alerts, IOCs..."
                        className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-full pl-10 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-[#00f0ff] w-64 transition-colors"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative text-[#94a3b8] hover:text-white transition-colors">
                        <Bell size={20} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff2a6d] rounded-full"></span>
                    </button>
                    <button className="text-[#94a3b8] hover:text-white transition-colors">
                        <Settings size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
