import { Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./components/Auth/Registration";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
