import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Component/home";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/globe-data`
      );
      const data = await response.json();
      console.log(data.data.Sheet1[0]);
      setData(data.data.Sheet1[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Home
        data={{
          ...data,
          "Additional Documents": " PAN card (Permanent Account Number)",
        }}
      />
    </div>
  );
}

export default App;
