import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
//import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Contact from '../../pages/contact/Contact'
import Projects from '../../pages/projects/Projects'

export default function RouteComponent() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact={true} path='/' element={<About/>}/>
            <Route exact={true} path='/about' element={<About/>}/>
            <Route exact={true} path='/contact' element={<Contact/>}/>
            <Route exact={true} path='/projects' element={<Projects/>}/>
        </Routes>
    </BrowserRouter>

  )
}
