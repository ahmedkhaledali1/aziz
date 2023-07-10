import React from 'react';
import { motion } from 'framer-motion';

const qoute = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.05,
    },
  },
};

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className="mb-2 sm:py-0 sm:mt-3">
      <motion.h1
        variants={qoute}
        initial="initial"
        animate="animate"
        className={`text-start align-text-top pb-6 font-bold ${className}`}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
