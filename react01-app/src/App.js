import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/navbar'
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import AboutUsScreen from './screens/AboutUsScreen';
import CategoryScreen from './screens/CategoryScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact={true} path="/" component={HomeScreen}></Route>
            <Route path="/Category" component={CategoryScreen}></Route>
            <Route path="/AboutUs" component={AboutUsScreen}></Route>
          </Switch>
        </BrowserRouter>
      </header>
      <div className="content">
      </div>
    </div>
  );
}

export default App;
