import React, { useEffect } from 'react'
import { init } from 'ityped'

const Animation = () => {
  
  useEffect(() => {
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: ["Développeur Fullstack", "React, Node.js, JavaScript"] })
  }, [])

  return <div id="myElement"></div>
  }

  export default Animation