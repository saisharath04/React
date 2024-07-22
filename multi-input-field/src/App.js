import React, { useEffect, useState } from "react";
import InputText from "./InputText";

function App() {
  const [data, setData] = useState([]);

  const fetchDetails = async () => {
    const response = await fetch("https://reqres.in/api/users");
    console.log("res = 1", response.body);
    const res = await response.json();
    console.log("res = 2", res);
    setData(res.data);
  };

  useEffect(() => {
    // fetch('https://reqres.in/api/users').then((response) => response.json()).then(res => {
    //   console.log('data', res.data);
    //   setData(res.data)
    // })
    fetchDetails();
  }, []);

  console.log("data", data);

  return (
    <div className="container">
      <div className="box">
        <InputText />
      </div>
    </div>
  );
}

export default App;
