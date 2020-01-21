import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Menu } from 'semantic-ui-react'


import Dashboard from './dashboards';
import Table from './Table';
import InputPage from './inputPage';
import LoginForm from './Login';
import TutorialPage from './tutorialPage';

class MenuExampleButtons extends Component {

    render() {
        return (
<Router>
<Menu>
    <Menu.Item>
    <Link to='/'><Button primary>Sign up</Button></Link>
    </Menu.Item>

    <Menu.Item>
      <Link to='/'><Button>Log-in</Button></Link>
    </Menu.Item>
  </Menu>
        <Route path ="/dashboards" component ={Dashboard} />
        <Route path="/input" component={InputPage} />
        <Route path="/" exact component ={LoginForm} />
        <Route path="/lab" exact component ={Table} />
        <Route path="/tutorial" component={TutorialPage} />
    </Router>
      )
}
}

export default MenuExampleButtons;