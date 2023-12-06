import React, { useEffect, useState } from "react";
import "./Watchesview.css";
import Assetsapi from "../componenets-Assets/Assetsapi";

const Watchesview = () => {
  const [watches, setWatches] = useState();
  useEffect(() => {
    setWatches(Assetsapi);
  }, [watches]);

  // console.log(watches)
  return (
    <div className="view">
      <div className="view-wrapper">
        {watches &&
          watches?.map((i) => (
            <div className="view-map" key={i.id}>
                <div className="view-map-headers">
                  <h1 className="view-h1">{i.title}</h1>
                  <h6 className="view-h6">{i.desc}</h6>
                </div>
                <img src={i.img} className="view-img" alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Watchesview;
