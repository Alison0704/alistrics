import React, { useState, useEffect } from 'react';

const FollowerCat = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isIdle, setIsIdle] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setIsIdle(true);
            setPosition({ x: event.clientX, y: event.clientY});
        };

        const handleMouseIdle = () => {
            setIsIdle(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseIdle);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseIdle);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'red',
                transition:'ease-in-out 2s',
                pointerEvents: isIdle ? 'none':'all'
            }}
        />
    );
};

export default FollowerCat;