import { useState } from 'react'
import './App.css'
import ComponentMainSite from './components/header/ComponentMainSite.jsx'
import ComponentParticle from './components/particles/ComponentParticle.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div  className="App content grid">

        <div className="content mx-auto m-auto  flex flex-direction-reverse">
          <ComponentMainSite />
          <ComponentParticle />
        </div>
      </div>
      
      
    </>
  )
}

export default App
