import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import ShowBook from './pages/ShowBook'
import Edit from './pages/Edit'
import Delete from './pages/Delete'

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/books/create' element= {<Create/>} />
        <Route path='/books/details/:id' element= {<ShowBook/>} />
        <Route path='/books/edit/:id' element= {<Edit/>} />
        <Route path='/books/delete/:id' element= {<Delete/>} />
      </Routes>
   
  )
}

export default App