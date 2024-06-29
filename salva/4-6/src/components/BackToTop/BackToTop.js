import React from 'react';
import './BackToTop.css'
const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="back-to-top" onClick={scrollToTop}>
            ↑
        </div>
    );
};

export default BackToTop;
