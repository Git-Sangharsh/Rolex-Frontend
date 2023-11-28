import React from "react";
import "./Explore.css";
import { motion } from "framer-motion";

const Explore = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="explore"
    >
      <div className="explore-div">
        <div className="explore1">
          <motion.h1
            className="explore-header"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Explore the Rolex <br></br>
            collection
          </motion.h1>
        </div>

        <div>
          <motion.h1
            className="explore-p"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            The Rolex collection offers a wide range of prestigious, high-{" "}
            <br></br> precision timepieces, from Professional to Classic models
            to<br></br>
            suit any wrist.
          </motion.h1>
          <motion.h1
            className="find-rolex"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Find your Rolex{" "}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Explore;
