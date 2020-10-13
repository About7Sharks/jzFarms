import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from './ui/navbar'
import Home from './ui/home'
import Stay from './ui/stay'
import About from './ui/about'
import Learn from './ui/learn'
import Shop from './ui/shop'
import './basic.scss'


const renderLoader = () => <p>Loading ...</p>;

function App() {
  return (
    <div className="App">
      <Suspense fallback={renderLoader()}>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path={["/","/home"]} component={Home}/>
          <Route exact path='/Stay' component={Stay}/>
          <Route exact path='/Learn' component={Learn}/>
          <Route exact path='/About' component={About}/>
          <Route path='/Shop' component={Shop}/>
          <Route path='*' render ={()=> <Redirect to='/'/>}/>
        </Switch>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
