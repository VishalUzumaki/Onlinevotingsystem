import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from  './components/About';
import Error from  './components/Error';
import Navigation from './components/Navigation';
import Help from './components/Help';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Navigation/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/history" component={Help}/>
                    <Route path="/login" component={Login}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
       );
  }
}

export default App;
