import React from 'react';
import style from './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import List from './Components/List/List';
import Create from './Components/Create/Create';
import Hospital from './Components/Hospital/Hospital';
import Protected from './Components/Protected/Protected';

function App() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Route exact path='/' component={Home}/>
        <Route path='/list' component={List}/>
        <Route path='/login' component={Login} />
        <Protected path="/create" component={Create}/>
        <Route path="/hospital/:id" component={Hospital}/>
      </div>
    </BrowserRouter>
  );
}

export default App;