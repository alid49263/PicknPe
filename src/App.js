import React from 'react'
import "./App.css"
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from './components/Home'
import Restaurant from './components/Restaurant'
function App() {
  return (
      <div>
      <Router>
         <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/restaurant" exact component={Restaurant}></Route>
         </div>
      </Router>
    </div>
  )
}

export default App

