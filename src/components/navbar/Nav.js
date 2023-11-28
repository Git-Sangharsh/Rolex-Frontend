import React, { useState } from "react";
import "./Nav.css";
import rolexlogo from "../assets/rolexlogo.png";
import { Search, MapPin, Heart } from "lucide-react";
import { GanttChart } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Nav = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  const [secondNav, setSecondNav] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("scroll y postion is", latest);
    const previous = scrollY.getPrevious();
    console.log("scroll previous is ", previous);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else if (latest > 912 && previous > latest) {
      setHidden(false);
      setSecondNav(true);
    } else if (previous > latest) {
      setSecondNav(false);
      setHidden(false);
    } else {
      setHidden(false);
    }
  });

  console.log("hidden state is ", hidden);
  return (
    <motion.div
      variants={{
        visible: { y: 0,   },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="nav"
    >
      <div className="nav-wrapper">
        <div className="menu">
          <div className="row">
            <GanttChart className="icon-class" />
            <h1 className="headers">Menu</h1>
          </div>
        </div>
        <div className="logo">
          <img src={rolexlogo} className="logoimage" alt="" />
        </div>
        <div className="search">
          <div className="row">
            <Search className="icon-class" />
            <h1 className="headers">Search</h1>
          </div>
          <div className="row">
            <MapPin className="icon-class" />
            <h1 className="headers">Store locator</h1>
          </div>
          <div className="row">
            <Heart className="icon-class" />
            <h1 className="headers">Favourites</h1>
          </div>
        </div>
      </div>
      <motion.div
        className={secondNav ? "hide-second-nav" : "second-nav"}
        variants={{
          visible: { y: 0,},
          hidden: {
            y: secondNav ? 0 : "-100%",
          },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="category">
          <h1 className="catogory-headers">All</h1>
          <h1 className="catogory-headers">Classic</h1>
          <h1 className="catogory-headers">Professional</h1>
          {/* <h1 className="catogory-headers">Watches by theme</h1> */}
        </div>
        <div className="configure">
          <h1 className="configure-headers">Configure</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Nav;
