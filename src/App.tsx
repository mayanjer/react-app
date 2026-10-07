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
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

interface Error {
  message: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {

      setLoading(true)
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users", {signal: controller.signal}
        );
        console.log(res.data);
        setUsers(res.data);
        setLoading(false)
      } catch (error) {
        if (error instanceof (CanceledError)) return
        setError((error as AxiosError).message);
        setLoading(false)
      }
    };
    fetchData();
    return ()=> controller.abort()
  }, []);

  return (
    <>
      {isLoading && <div className = "spinner-border"></div>}
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
