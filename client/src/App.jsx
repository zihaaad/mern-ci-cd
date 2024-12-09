import {useEffect, useState} from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => setMessage(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
};

export default App;
