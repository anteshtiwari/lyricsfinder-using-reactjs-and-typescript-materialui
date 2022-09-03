import React, { Component } from 'react';
//import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import { Provider } from './context';

import "./App.css";

//import { ContextController } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Routes>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
