import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Sidebar from './components/sidebar/sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path ='/add' element= {<Add/>}/>
          <Route path ='/list' element= {<List/>}/>
          <Route path ='/order' element= {<Order/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
