import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [test, setTest] = useState([]);
  const API_URL = import.meta.env.VITE_SERVER_URL;
  console.log(API_URL, "URL");

  useEffect(() => {
    axios
      .post(`${API_URL}/auth/login`, {
        email: "test11@test",
        password: "test11@test",
      })
      .then((response) => setTest(response.data.token));
    console.log(test);
  }, []);

  return (
    <>
      <div>{test}</div>
    </>
  );
}

export default App;
