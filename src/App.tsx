import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ListGroup from './components/ListGroup'



function App() {

  const items = [ "Kampala","Kenya", "Momabasa" ,"Kigali" ]
 
  return <div><ListGroup items = {items}  heading = "Cities" /></div>
}

export default App
