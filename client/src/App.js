import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router/*, Switch*/} from "react-router-dom";
import Begin from './components/Begin';
import Categories from './components/Categories';
// import List from './components/List';
import Logup from './components/Profile/Up';
import Help from './components/Help/Help';
import Profile from './components/Profile/Profile';

function App() {

  return (
  <div className="App"> 
    <Router>
      <Route exact path='/' render={()=> <Logup/>}/>
      <Route exact path='/check' render={()=> <Categories/>}  />
      {/* <Route exact path='/list' render={()=> <List/>}  /> */}
      <Route exact path='/begin' render={()=> <Begin/>}  />
      <Route exact path='/help' render={()=> <Help/>}  />
      <Route exact path='/profile' render={()=> <Profile/>}  />
      {/* <Route exact path='/check' render={()=> <Item category={'Casa Principal'} subcategory='Rack Principal (orden)'/>}  /> */}
    </Router>
  </div>
  );
}

export default App;
