import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import SottDashBoard from './Components/sottdashboards';
import JumbotronPage from './Components/jumbotron';
import SottTable from './Components/sottTable';
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

mongoose
    .connect('mongodb+srv://dbCorey:MVDhmYhNQkp2y8T@cluster0-ymebw.mongodb.net/sottlab?retryWrites=true&w=majority', { useNewUrlParser: true}, { useMongoClient: true})
    .then(()=> console.log("MongoDB database connection established successfully"))
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

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
              </ul>
            </div>
          </nav>
      <JumbotronPage />
      <Route path ="/dashboards" component ={SottDashBoard} />
      
      <Route path="/" exact component ={SottTable} />
      
    </div>
    </Router>
  );
}
}

export default App;
