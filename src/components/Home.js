import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px red",
      boxShadow: "0px 0px 8px red",
      transition: {
        duration: 0.3,
        yoyo: 10,
      },
    },
  };

  return (
    <div className="home container">
      <motion.h2
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring" }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
