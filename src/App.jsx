import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddVolunteer from "./components/AddVolunteer";
import ViewVolunteer from "./components/ViewVolunteer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddVolunteer />} />

        <Route path="/view" element={<ViewVolunteer />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;