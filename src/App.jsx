import { useState } from 'react'
import './App.css'
import ComponentMainSite from './components/header/ComponentMainSite.jsx'
import ComponentParticle from './components/particles/ComponentParticle.jsx'
import ComponentBodySite from './components/body/ComponentBodySite.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div  className="App content grid">

        <div className="content">
          <div className="main">
          <ComponentMainSite />
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
