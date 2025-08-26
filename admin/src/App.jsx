import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Lists from './pages/Lists'
import Orders from './pages/Orders'
import Login from './pages/Login'
import { adminDataContext } from './context/AdminContext'
  import { ToastContainer, toast } from 'react-toastify';

function App() {
  let {adminData} = useContext(adminDataContext)
  return (

    <>
      <ToastContainer theme="dark" // keeps dark background
  toastStyle={{
    background: '#1c1c1c', // dark panel color
    color: '#FFD166',       // yellow text
    border: '1px solid #FFD166',
  }}/>
    {!adminData ? <Login/> : <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/lists' element={<Lists/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </>
      }
    </>
  )
}

export default App
