import React from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import Rolexwatches from "./components/Rolexwatches/Rolexwatches";
import Explore from "./components/explore/Explore";
import Watches from "./components/watches/Watches";
import Footer from "./components/footer/Footer";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>The Rolex Collection | Watches</title>
      </Helmet>
      <Nav />
      <Rolexwatches />
      <Explore />
      <Watches />

      <Footer />
    </div>
  );
};

export default App;
