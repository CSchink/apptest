import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';

import Dashboard from './dashboards';
import Table from './Table';
import InputPage from './inputPage';
import LoginForm from './Login';
import TutorialPage from './tutorialPage';

class NormalNavbar extends Component {

    render() {
        return (
<Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/lab" className="navbar-brand">SOTT Lab</Link>
                <div className="collapse nav-collapse">
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
                    <Link to="/dashboards" className="nav-link">Dashboard</Link>
                    </li>
                </ul>
                </div>
    </nav> 
        <Route path ="/dashboards" component ={Dashboard} />
        <Route path="/input" component={InputPage} />
        <Route path="/login" exact component ={LoginForm} />
        <Route path="/lab" exact component ={Table} />
        <Route path="/tutorial" component={TutorialPage} />
    </Router>
      )
}
}

export default NormalNavbar;