import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const svgVariant = {
    hidden: {
      rotate: -180,
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const secondVariant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }}>
      <div className="logo">
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={secondVariant}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={secondVariant}
          />
        </motion.svg>
      </div>
      <div>
        <h1>Pizza Joint</h1>
      </div>
    </motion.header>
  );
};

export default Header;
