import React, { Component } from 'react';
import { BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
import Homepage from './Homepage';
import Navbar from './Navbar';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      loggedIn: false
    }
  }


  updateLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    return (
      <Router history={useHistory}>
        <div className= "container">
          <Navbar />
          <br/>
            
            { !this.state.loggedIn && <Route path = "/login" exact render={
              (props) => {
                return (<Login {...props} update={this.updateLogin}/>)
              }
            } />}
            {this.state.loggedIn && <Route path = "/homepage" exact render= {
              (props) => {
                return (<Homepage {...props} update={this.updateLogin}/>)
              }
            } />}
        </div>
      </Router>
    );  
  }
}

export default App;
