import React from 'react';

const Card = ({ title, children, className = "" }) => {
    return (
        <div className={`glass-panel ${className}`}>
            {title && (
                <div className="card-title">
                    {title}
                </div>
            )}
            {children}
        </div>
    );
};

export default Card;
