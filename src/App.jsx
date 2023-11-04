import { useState } from 'react'
import './App.css'
import ComponentMainSite from './components/header/ComponentMainSite.jsx'
import ComponentParticle from './components/particles/ComponentParticle.jsx'
import ComponentBodySite from './components/body/ComponentBodySite.jsx'

function App() {

  return (
    <>
    
      <div  className="App content grid">

        <div className="content">
          <div className="main">
          <ComponentMainSite key="bien"/>
          </div>
          <div className='content__body'>
            <ComponentBodySite />
          </div>
          
          <ComponentParticle />
        </div>
      </div>
      
      
    </>
  )
}

export default App
