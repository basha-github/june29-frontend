//import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBook from './mycomponents/AddBook'
import Home from './mycomponents/Home'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route  path='/book/add' element={<AddBook />}/>

      <Route  path='/home' element={<Home />}/>

      </Routes>
      
      </BrowserRouter>



    </div>
  )
}
