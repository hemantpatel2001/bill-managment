import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import DashBord from '../screens/DashBord'
import AddNewInvoice from '../screens/AddNewInvoice'
import ViewInvoice from '../screens/ViewInvoice'



function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path='/register' element={<Register />} /> */}
          <Route path='/dashboard' element={<DashBord />} />
          <Route path='/addnewinvoice' element={<AddNewInvoice />} />
          <Route path='/viewinvoice' element={<ViewInvoice />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
