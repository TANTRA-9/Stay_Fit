import React from 'react';
import style from './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import List from './Components/List/List';

function App() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Route exact path='/' component={Home}/>
        <Route path='/list' component={List}/>
        <Route path='/login' component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;