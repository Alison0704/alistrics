import React, { useState, useEffect } from 'react';

const FollowerCat = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState('red');

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Add a delay of 500ms
            setTimeout(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            }, 1000);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        // Alternate between red and blue every second
        const interval = setInterval(() => {
            setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                top: position.y,
                left: position.x,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: color,
            }}
        ></div>
    );
};

export default FollowerCat;