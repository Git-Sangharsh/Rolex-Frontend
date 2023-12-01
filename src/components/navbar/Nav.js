import React, { useEffect, useState } from "react";
import "./Nav.css";
import rolexlogo from "../assets/rolexlogo.png";
import { Search, MapPin, Heart, X } from "lucide-react";
import { GanttChart } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import api from "../api/Api";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Nav = () => {
  //swiper

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  const [secondNav, setSecondNav] = useState(false);

  const [menuWatches, setMenuWatches] = useState(false);

  const [search, setSerach] = useState(false);

  const constSearch = () => {
    setSerach((prevDropdown) => {
      console.log("dropdown is ", !prevDropdown);
      document.documentElement.style.overflow = !prevDropdown
        ? "hidden"
        : "auto";
      document.body.style.overflow = !prevDropdown ? "hidden" : "auto"; // For some older browsers
      return !prevDropdown;
    });
    console.log("search is ", search);
  };

  useEffect(() => {
    setMenuWatches(api);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("scroll y postion is", latest);
    const previous = scrollY.getPrevious();
    // console.log("scroll previous is ", previous);
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

  const [dropdown, setDropdown] = useState(false);
  const dropdownClick = () => {
    setDropdown((prevDropdown) => {
      console.log("dropdown is ", !prevDropdown);
      document.documentElement.style.overflow = !prevDropdown
        ? "hidden"
        : "auto";
      document.body.style.overflow = !prevDropdown ? "hidden" : "auto"; // For some older browsers
      return !prevDropdown;
    });
  };

  // console.log("hidden state is ", hidden);
  return (
    <div className="parent-nav">
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="nav"
      >
        <div className="nav-wrapper">
          <div className="menu">
            {dropdown ? (
              <div className="row " onClick={dropdownClick}>
                <X className="icon-class" />
                <h1 className="headers">Close</h1>
              </div>
            ) : (
              <div className="row " onClick={dropdownClick}>
                <GanttChart className="icon-class" />
                <h1 className="headers">Menu</h1>
              </div>
            )}
          </div>
          <div className="logo">
            <img src={rolexlogo} className="logoimage" alt="" />
          </div>
          <div className="search">
            <div className="row" onClick={constSearch}>
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
            visible: { y: 0 },
            hidden: {
              y: secondNav ? 0 : "-100%",
            },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div className="category">
            {dropdown ? (
              <div>
                <div className="row " onClick={dropdownClick}>
                  <X className="close-show-nav-scroll icon-class" />
                  <h1 className="catogory-headers">Close</h1>{" "}
                </div>
              </div>
            ) : (
              <h1 className="hide-header">hello</h1>
            )}
            <h1 className="catogory-headers">All</h1>
            <h1 className="catogory-headers">Classic</h1>
            <h1 className="catogory-headers">Professional</h1>

            {/* <h1 className="catogory-headers">Watches by theme</h1> */}
          </div>
          <div className="configure">
            <h1 className="configure-headers">Configure</h1>
          </div>
        </motion.div>
        {search ? (
          <motion.div
            className={search ? "show-search" : "hide-search"}
            initial={{ y: "-200%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="child-show-search">
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
              {/* <MoveRight className="icon-class-search"/> */}
              <X className="icon-class-search " onClick={constSearch} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            className={search ? "show-search" : "hide-search"}
            initial={{ y: 0 }}
            animate={{ y: "-200%" }}
            exit={{ y: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        )}
      </motion.div>
      {dropdown ? (
        <motion.div
          initial={{ y: "-200%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={
            dropdown ? "menu-dropdown common-menu" : "hide-menu-dropdown"
          }
        >
          <div className="drop-menu-left">
            <h1 className="drop-menu-headers">Rolex Watches</h1>
            <h1 className="drop-menu-headers">Watchmaking</h1>
            <h1 className="drop-menu-headers">About Rolex</h1>
            <h1 className="drop-menu-headers">Rolex and sports</h1>
            <h1 className="drop-menu-headers">Perpetual Initiatives</h1>
            <h1 className="drop-menu-headers">Buying a Rolex</h1>
            <h1 className="drop-menu-headers">Care and servicing</h1>
          </div>
          <div className="drop-menu-right">
            <h1 className="drop-menu-headers none">Rolex Watches</h1>
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {menuWatches &&
                menuWatches.map((i) => (
                  <SwiperSlide
                    className="menu-img-parent menu-child-right"
                    key={i.id}
                  >
                    <img src={i.img} alt="" className="menu-child-img" />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={
            dropdown ? "menu-dropdown common-menu" : "hide-menu-dropdown"
          }
        ></motion.div>
      )}
    </div>
  );
};

export default Nav;
