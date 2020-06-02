import React from 'react'
import Home from './Home'
import Info from './Info'
import Experience from './Experience'
import PorteFolio from './PorteFolio'
import Contact from './Contact'
import '../stylesheet/Home.css'

function Content() {
  return (
    <>
    <Home 
      id='Home'
    />
    <Info 
      id='Presentation'
    />
    <Experience 
      id='Experience'
    />
    <PorteFolio 
      id='PorteFolio'
    />
    <Contact
      id='Contact'
    />
    </>
  )
}

export default Content