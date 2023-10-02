import { NavBar } from "./components/NavBar";
import { Car } from "./components/Car";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="cars-container">
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
      </div>
    </div>
  );
}
