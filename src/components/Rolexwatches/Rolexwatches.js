import React from "react";
import "./Rolexwatches.css";
import rolexvie1 from "../assets/rolexvi2.webm";

const Rolexwatches = () => {
  return (
    <div className="rolexwatches">
      <div className="rolexwatches-wrapper">
        <div className="video-background">
          <video className="video-control" autoPlay muted loop>
            <source src={rolexvie1} type="video/webm" />
          </video>
        </div>
        <div className="contain">
          <h1 className="the-collection">THE COLLECTION</h1>
          <h1 className="rolex-watches">Rolex watches</h1>
        </div>
      </div>
    </div>
  );
};

export default Rolexwatches;
