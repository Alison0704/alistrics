// src/components/Section.jsx
import React from 'react'

const Section = ({ title, children }) => {
  return (
    <div className="section h-svh flex align-middle">
        <section>
            <h2>{title}</h2>
            <div className="section-content">
            {children}
            </div>
        </section>
    </div>
  );
};

export default Section;