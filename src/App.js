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
import Fav from "./components-two/fav/Fav";
import Admin from "./components/admin/Admin";

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
          <Route
            path="/admin"
            element={
              <div>
                <Admin />
              </div>
            }
          />
          <Route
            path=":id"
            element={
              <div>
                <Nav />
                <Watchesview />
                <Watchesview />
              </div>
            }
          />
          <Route
            path=":id/:id"
            element={
              <div>
                <Nav />
                <Fav />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
