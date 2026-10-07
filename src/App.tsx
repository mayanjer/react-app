import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const user = { id: 0, name: "Mayanja" };

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal },
        );
        console.log(res.data);
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, []);

  const deleteUser = async (user: User) => {
    const originalList = [...users];
    setUsers(users.filter((usr) => usr.id !== user.id));

    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
      );
    } catch (error) {
      setError((error as AxiosError).message);
      setUsers(originalList);
    }
  };

  const addUser = async () => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/users", user);
      setUsers([user, ...users]);
    } catch (error) {
      setError((error as AxiosError).message);
    }
  };

  const updateUser = async (user: User) => {
    const originalList = [...users]
    const updatedUser = { ...user, name: user.name + "!" }
    setUsers(users.map((usr) => usr.id === user.id ? updatedUser : usr))
    
    try {
      await axios.patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser,
      );
    } catch (error) {
      setError((error as AxiosError).message)
      setUsers(originalList)
    }
    
  }

  return (
    <>
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button className="btn btn-outline-secondary mx-1" onClick = {()=>updateUser(user)}>Update</button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;