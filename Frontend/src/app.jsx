import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Place_order from './pages/Place_order/PLace_order'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <div className = 'app'>
      <NavBar /> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Place_order/>} />
      </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App;