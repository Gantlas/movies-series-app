import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/home/Landing";
import store from "./store";
import Movie from "./components/home/Movie";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="main">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
