import React from 'react';
import { motion } from 'framer-motion';

const TropicalLeaves = () => {
  const leaves = [
    { id: 1, top: '10%', left: '5%', delay: 0, emoji: '🍃' },
    { id: 2, top: '20%', right: '10%', delay: 0.5, emoji: '🌿' },
    { id: 3, top: '50%', left: '2%', delay: 1, emoji: '🍂' },
    { id: 4, top: '70%', right: '5%', delay: 1.5, emoji: '🍃' },
    { id: 5, top: '85%', left: '10%', delay: 2, emoji: '🌿' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-4xl md:text-6xl opacity-5 dark:opacity-10"
          style={{
            top: leaf.top,
            left: leaf.left,
            right: leaf.right,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {leaf.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default TropicalLeaves;
