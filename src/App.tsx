import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'



function App() {
  
  return (
    <div>
      <Alert>
        Hello world
      </Alert>{" "}
      <Button>Enter</Button>
    </div>
  ); 
}

export default App 
