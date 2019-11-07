import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';

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
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
          </nav> */}

<header>
         
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Welcome!</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/lab">Database</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/dashboards">Tutorial</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/tutorial">Tutorial</MDBNavLink>
                  </MDBNavItem>
                    <MDBNavLink to="/login">Log In</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/input">Input</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>

          <MDBView src="http://www.testnec.ro/wp-content/uploads/2019/01/imagine-2.jpg">
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <h1>Welcome to SOTT Lab, home of the greatest warriors known to the Cosmos</h1>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      <Route path ="/dashboards" component ={Dashboard} />
      <Route path="/input" component={InputPage} />
      <Route path="/login" exact component ={LoginForm} />
      <Route path="/lab" exact component ={Table} />
      <Route path="/tutorial" component={TutorialPage} />
    </div>
    </Router>
  );
}
}

export default App;
