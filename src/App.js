import React from 'react'
import './App.css'
// import { Switch, Route } from "react-router-dom"
// import AboutPage from './components/AboutPage'
// import DiscoverMoviesPage from './components/DiscoverMoviesPage'
// import Homepage from './components/HomePage'
import NavBar from './components/NavBar'

// whatever


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Switch> */}
        {/* <Route path='./discover' component='{DiscoverMoviesPage}'/> */}
        {/* <Route exact path='./about' component='{AboutPage}'/> */}
        {/* <Route path='/' component='{AboutPage}'/> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
