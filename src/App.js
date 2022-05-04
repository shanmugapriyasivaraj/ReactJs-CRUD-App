import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
