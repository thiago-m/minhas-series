import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  )
}

function App() {  
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={ Home } />
        <Route path="/generos" exact component={ Generos } />
        <Route path="/genero/novo" exact component={ NovoGenero } />
        <Route path="/genero/:id" exact component={ EditarGenero } />
      </div>
    </Router>
  );
}

export default App;
