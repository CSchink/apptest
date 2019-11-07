import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class SottNav extends Component {
    state = {
      collapseID: ''
    }
    
    toggleCollapse = collapseID => () => {
      this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }
    
    render() {
      return (
        <Router>
          <MDBContainer>
            <MDBNavbar color="light-blue lighten-4" style={{ marginTop: '20px' }} light>
              <MDBContainer>
                <MDBNavbarBrand>
                  SOTT Lab
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
                <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
                  <NavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/lab">Database</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/tutorial">Tutorial</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/dashboards">Dashboards</MDBNavLink>
                    </MDBNavItem>
                  </NavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </MDBContainer>
        </Router>
        );
      }
    }
export default SottNav;