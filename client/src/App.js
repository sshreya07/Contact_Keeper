import React, { Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layouts/Navbar';

//Routes are Switch from react-router-dom in new version of react
//elements are component 

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <div className="container">
          <Routes>    
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
