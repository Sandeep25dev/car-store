import { NavBar } from "./components/NavBar";
import { Car } from "./components/Car";
import "bootstrap/dist/css/bootstrap.min.css";
import { MockData } from "./data/mock_data";
import { useState } from "react";


export default function App() {
  const [data, setData] = useState(MockData);
  return (
    <div className="app">
      <NavBar setData={setData} MockData={MockData}/>
      <Car MockData={data} />
    </div>
  );
}


