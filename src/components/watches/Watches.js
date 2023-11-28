import React, { useEffect, useState } from "react";
import "./Watches.css";
// import watch1 from "../assets/watch1.jpg";
import api from "../api/Api";
import { motion } from "framer-motion";

const Watches = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(api);
  }, []);
  // console.log(data);

  return (
    <div className="watches">
      <h1>Hello World</h1>
      <div className="wathches-wrapper">
        <motion.div
          // className="second-nav"
          className="watch-second-nav"
        >
          <div className="category">
            <h1 className="catogory-headers">All</h1>
            <h1 className="catogory-headers">Classic</h1>
            <h1 className="catogory-headers">Professional</h1>
            <h1 className="catogory-headers">Watches by theme</h1>
          </div>
          <div className="configure">
            <h1 className="configure-headers">Configure</h1>
          </div>
        </motion.div>
        <div className="conatainer1 common-container">
          {/* <img src={watch1} alt="" /> */}
          {data?.map((i) => (
            <div className="watches-map" key={i.id}>
              <img src={i.img} alt="" className="map-img" />
              <motion.div
                className="map-content"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h1
                  className={
                    i.clr.length > 2
                      ? "watch-white-name common-name"
                      : "watch-name common-name"
                  }
                >
                  {i.name}
                </h1>
                <p
                  className={
                    i.clr.length > 2
                      ? "watch-white-description common-description"
                      : "watch-description common-description"
                  }
                >
                  {i.description}
                </p>
                <h4
                  className={
                    i.clr.length > 2
                      ? "watch-white-more common-more"
                      : "watch-more common-more"
                  }
                >
                  {i.more}
                </h4>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watches;
