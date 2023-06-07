import React from 'react';

const Section = ({ children, title }) => (
    <div className="container section mt-4">
        <div className="section-title">
            <span>{title}</span>
        </div>
        {children}
    </div>
);

export default Section;