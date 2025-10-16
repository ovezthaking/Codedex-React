import { Routes, Route } from "react-router-dom";
import Garden from "./components/Garden";
import House from "./components/House";
import Museum from "./components/Museum";
import School from "./components/School";
import Map from "./components/Map";

function App() {
  return (
    <div>
      <h1>Map Navigation</h1>
      <Map />
      <Routes>
        <Route path="/" element={<House/>} />
        <Route path="/school" element={<School/>}/>
        <Route path="/museum" element={<Museum />}/>
        <Route path="/garden" element={<Garden/>}/>

      </Routes>
    </div>
  );
}

export default App;
