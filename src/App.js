import "./App.css";

import Home from "./components/Home/Home";
import AdminHome from "./components/Admin/adminHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/admin" element={<AdminHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
