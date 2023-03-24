import React from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        ease: "linear",
      },
    },
  },
};

export default function Skills() {
  return (
    <div>
      <div className="marquee overflow-hidden">
        <motion.div
          className="track font-outfit text-2xl"
          variants={marqueeVariants}
          animate="animate"
        >
          Java. Spring.
        </motion.div>
      </div>
    </div>
  );
}
