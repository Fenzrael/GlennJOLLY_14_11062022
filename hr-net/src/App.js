import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmployeesList from "./pages/EmployeesList";
import Error from "./pages/Error";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees-list" element={<EmployeesList />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
