import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Checkers/Home';
import Login from './Checkers/login';
import Register from './Checkers/register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link><br/>
        <Link to="/login">Login</Link><br/>
        <Link to="/register">Register</Link>

        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </div>
    </BrowserRouter>
  );
}

export default App;