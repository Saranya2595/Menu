
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from'./components/Login';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>

        <header className="App-header">
               <h2>Welcome to React Router Tutorial</h2>
        </header>
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/login' component={Login} />
               </Switch>
        </div>
         </Router>
      </div>
    );
  }
}

export default App;
