import React from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import Rolexwatches from "./components/Rolexwatches/Rolexwatches";
import Explore from "./components/explore/Explore";
import Watches from "./components/watches/Watches";
import Footer from "./components/footer/Footer";
import { Helmet } from "react-helmet";
import Watchesview from "./components-two/Watchesview/Watchesview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>The Rolex Collection | Watches</title>
        </Helmet>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Nav />
                <Rolexwatches />
                <Explore />
                <Watches />
                <Footer />
              </div>
            }
          />
          <Route path=":id" element={<div>
            <Nav />
            <Watchesview />
          </div>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
