import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function AnimatedCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for cursor following
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Delayed cursor for trailing effect
  const trailX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const trailY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);
    };

    const click = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 150);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleWindowEnter = () => setIsVisible(true);
    const handleWindowLeave = () => setIsVisible(false);

    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', click);
    window.addEventListener('mouseenter', handleWindowEnter);
    window.addEventListener('mouseleave', handleWindowLeave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', click);
      window.removeEventListener('mouseenter', handleWindowEnter);
      window.removeEventListener('mouseleave', handleWindowLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      {/* Main Cursor */}
      <motion.div
        className="fixed left-0 top-0 z-[101] flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
            borderColor: isHovering ? 'rgba(45, 212, 191, 0.8)' : 'rgba(45, 212, 191, 0.6)'
          }}
          transition={{ duration: 0.15 }}
          className="relative h-6 w-6 rounded-full border-2 bg-neon-teal/20 backdrop-blur-sm shadow-[0_0_20px_rgba(45,212,191,0.6)]"
        >
          {/* Inner dot */}
          <motion.div
            animate={{
              scale: isClicking ? 1.2 : 0.8,
              opacity: isHovering ? 0.8 : 0.4
            }}
            className="absolute inset-1 rounded-full bg-neon-teal shadow-[0_0_10px_rgba(45,212,191,0.8)]"
          />
        </motion.div>
      </motion.div>

      {/* Trailing Glow Effect */}
      <motion.div
        className="fixed left-0 top-0 z-[100] rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isHovering ? 0.3 : 0.1
          }}
          transition={{ duration: 0.3 }}
          className="h-32 w-32 rounded-full bg-gradient-to-r from-neon-blue/20 via-neon-teal/15 to-neon-pink/20 blur-2xl"
        />
      </motion.div>

      {/* Secondary Glow Ring */}
      <motion.div
        className="fixed left-0 top-0 z-[99] rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.8 : 0.8,
            opacity: isHovering ? 0.2 : 0.05
          }}
          transition={{ duration: 0.4 }}
          className="h-48 w-48 rounded-full bg-gradient-to-br from-neon-blue/10 to-transparent blur-3xl"
        />
      </motion.div>

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.div
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed left-0 top-0 z-[98] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neon-teal/60 bg-neon-teal/20"
          style={{
            left: springX.get(),
            top: springY.get()
          }}
        />
      )}
    </div>
  );
}

export default AnimatedCursor;
