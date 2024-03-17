
import React, { useState, useEffect } from 'react';
import './CursorFollower.css';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX - 100, y: e.clientY -100 });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-follower" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <img src="./assets/images/banner/banner-shape-2-2.png" alt="Cursor Follower" />
    </div>
  );
};

export default CursorFollower;
