import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ListGroup from './components/ListGroup'



function App() {
  const handleSelect = function(item:String){
    console.log(item)
  }

  const items = [ "Kampala","Kenya", "Momabasa" ,"Kigali" ]
 
  return <div><ListGroup items={items} heading="Cities" onSelectItem={ handleSelect} /></div>
}

export default App
