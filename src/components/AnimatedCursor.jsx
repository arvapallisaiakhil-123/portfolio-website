import { useEffect, useState } from 'react';

function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-teal/60 bg-neon-teal/20 blur-sm"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-[99] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/10 blur-3xl"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
    </div>
  );
}

export default AnimatedCursor;
