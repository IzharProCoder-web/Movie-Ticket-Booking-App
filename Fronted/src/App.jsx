import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDeails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Toaster } from 'react-hot-toast'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShow from './pages/admin/AddShow'
import ListBooking from './pages/admin/ListBooking'
import Listshow from './pages/admin/Listshow'


const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
    <Toaster />
    {!isAdminRoute && <Navbar />}
      <Routes >
        <Route path='/' element={<Home />}/> 
        <Route path='/movies' element={<Movies /> }/> 
        <Route path='/movies/:id' element={<MovieDeails />}/> 
        <Route path='/movies/:id/:date' element={<SeatLayout />}/> 
        <Route path='/my-bookings' element={<MyBookings />}/> 
        <Route path='/favorite' element={<Favorite />}/> 
        <Route path='/admin/*' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='add-shows' element={<AddShow />}/> 
          <Route path='list-shows' element={<Listshow />}/> 
          <Route path='list-bookings' element={<ListBooking />}/> 
        </Route>
      </Routes>
      {!isAdminRoute && <Footer/> }
    </>
  )
}

export default App
