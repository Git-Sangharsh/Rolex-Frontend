import React, { useEffect, useState } from "react";
import "./Watchesview.css";
// import Assetsapi from "../componenets-Assets/Assetsapi";
import axios from "axios";

const Watchesview = () => {
  // const [watches, setWatches] = useState();

  const [fetch, setFetch] = useState([]);

  const fetchData = () => {
    axios
      .get("https://rolex-backend.onrender.com/fetchrolex")
      .then((response) => {
        console.log(response.data);
        setFetch(response.data);
      })
      .catch((err) => {
        console.log("error fetching data", err);
      });
  };

  useEffect(() => {
    // setWatches(Assetsapi);
    fetchData();

    // setFavourite(Object.fromEntries(Assetsapi.map((item) => [item.id, false])));
  }, []);

  const handleFavourite = (itemId) => {
    // Toggle the favorite state for the specific item
    // setFavourite((prevMap) => ({
    //   ...prevMap,
    //   [itemId]: !prevMap[itemId],
    // }));
    console.log("item is is ", itemId);
  };

  // console.log(watches)
  return (
    <div className="view">
      <div className="view-wrapper">
        {/* {watches &&
          watches?.map((i) => (
            <div className="view-map" key={i.id}>
              <div className="view-child-map">
                <div
                  className="view-map-headers"
                  onClick={() => handleFavourite(i.id)}
                >
                  <h1 className="view-h1">{i.title}</h1>
                  <h6 className="view-h6">{i.desc}</h6>
                </div>
                <img src={i.img} className="view-img" alt="" />
              </div>
              <div className="parent-favourite"></div>
            </div>
          ))} */}

        {fetch &&
          fetch?.map((i) => (
            <div className="view-map" key={i._id}>
              <div className="view-child-map">
                <div
                  className="view-map-headers"
                  onClick={() => handleFavourite(i.id)}
                >
                  <h1 className="view-h1">{i.title}</h1>
                  <h6 className="view-h6">{i.desc}</h6>
                </div>
                <img src={i.img} className="view-img" alt="" />
              </div>
              <div className="parent-favourite"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Watchesview;
