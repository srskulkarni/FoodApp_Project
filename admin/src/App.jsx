import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { Route,Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path ='/add' element= {<Add url = {url}/>}/>
          <Route path ='/list' element= {<List url = {url}/>}/>
          <Route path ='/orders' element= {<Order url = {url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
