import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

  const appStyle = {
    backgroundImage: `url('/img/mario-bg.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'bottom',
    height: '100vh',
  };
class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App" style = {appStyle}>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/project/:id' element={<ProjectDetails />} />
            <Route path='/signin' element={< SignIn/>} />
            <Route path='/signup' element={< SignUp />} />
            <Route path='/create' element={< CreateProject />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

