import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admin from './Pages/Admin';
import Adminpage from './Pages/Adminpage'
import Login from './Pages/Login'
import User from './Pages/User';
import Layout from './/Layout'
import Home from './Pages/Home'; 

function App() {
  return (

    <BrowserRouter >

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Login/>} />
        <Route path='Home' element={<Home />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Adminpage" element={<Adminpage/>} />
        <Route path="Login" element={<Login />} />
        <Route path="User" element={<User />} />


        

        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;