import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
    const variants = {
        default: 'bg-[rgba(255,255,255,0.1)] text-white',
        success: 'bg-[rgba(5,213,170,0.1)] text-[#05d5aa] border border-[rgba(5,213,170,0.2)]',
        warning: 'bg-[rgba(255,165,0,0.1)] text-orange-400 border border-[rgba(255,165,0,0.2)]',
        danger: 'bg-[rgba(255,42,109,0.1)] text-[#ff2a6d] border border-[rgba(255,42,109,0.2)]',
        info: 'bg-[rgba(0,240,255,0.1)] text-[#00f0ff] border border-[rgba(0,240,255,0.2)]',
        purple: 'bg-[rgba(112,0,255,0.1)] text-[#7000ff] border border-[rgba(112,0,255,0.2)]',
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
