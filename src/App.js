import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';

import Dashboard from './Components/dashboards';
import Table from './Components/Table';
import InputPage from './Components/inputPage';
import LoginForm from './Components/Login';
import TutorialPage from './Components/tutorialPage';

class App extends Component {
  render() { 
    return (
    <Router>
    
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/lab" className="navbar-brand">Database</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Login</Link>
                </li>

                <li className="navbar-item">
                  <Link to="/input" className="nav-link">Input</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/tutorial" className="nav-link">Tutorial</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/dashboards" className="nav-link">Statistics</Link>
                </li>
              </ul>
            </div>
          </nav>
      
      <Route path ="/dashboards" component ={Dashboard} />
      <Route path="/input" component={InputPage} />
      <Route path="/" exact component ={LoginForm} />
      <Route path="/lab" exact component ={Table} />
      <Route path="/tutorial" component={TutorialPage} />
    </div>
    </Router>
  );
}
}

export default App;
