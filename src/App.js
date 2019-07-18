import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import SottDashBoard from './Components/sottdashboards';
import JumbotronPage from './Components/jumbotron';
import SottTable from './Components/sottTable';
import inputPage from './Components/inputPage';

class App extends Component {
  render() { 
    return (
    <Router>
    
    <div>
      {/* <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="https://www.sott.net/">SOTT Lab</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button>
      </nav> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="https://www.sott.net/" target="_blank">
                          </a>
            <Link to="/" className="navbar-brand">SOTT Lab</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/dashboards" className="nav-link">Dashboards</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/input" className="nav-link">Input</Link>
                </li>
              </ul>
            </div>
          </nav>
      <JumbotronPage />
      <Route path ="/dashboards" component ={SottDashBoard} />
      <Route path="/input" component={InputPage} />
      <Route path="/" exact component ={SottTable} />
      
    </div>
    </Router>
  );
}
}

export default App;
