import React from 'react';

const Card = ({ children, className = '', title, action }) => {
    return (
        <div className={`glass-panel p-6 ${className}`}>
            {(title || action) && (
                <div className="flex items-center justify-between mb-4">
                    {title && <h3 className="text-lg font-semibold text-white tracking-wide">{title}</h3>}
                    {action && <div>{action}</div>}
                </div>
            )}
            {children}
        </div>
    );
};

export default Card;
