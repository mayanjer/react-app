import { useEffect, useRef, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import HeartBtn from "./components/Heart";
import ExpandableText from "./components/ExpandableText";
import { LayoutFreeform } from "lucide-react";
import Form from "./components/Form";
import TrackerForm from "./components/TrackerForm";
import Table from "./components/Table";
import ProductList from "./components/ProductList";
import axios from "axios";

interface User {
  id: number;
  name: string;
}



function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(await res.data)
      setUsers(res.data)
    }
    fetchData()
    
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
