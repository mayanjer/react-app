import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  
  const [isVisible, setIsVisible] = useState(false)
  const onClickHandler = () => {
   setIsVisible(true)
  };



  return (
    <div>
      {isVisible && <Alert isVisible={ isVisible } onClose = {()=>setIsVisible(false)}>Hello world</Alert>}
      <Button onClick={onClickHandler} color="secondary">
        Enter
      </Button>
    </div>
  );
}

export default App;
