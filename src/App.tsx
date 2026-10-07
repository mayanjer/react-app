import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
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
      <ul className = "list-group">
        {users.map((user) => (
          <li className = "list-group-item d-flex justify-content-between"  key={user.id}>{user.name}
          <button className = "btn btn-outline-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
