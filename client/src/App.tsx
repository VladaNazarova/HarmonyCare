import { Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./components/Auth/Registration";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import DoctorCabinet from "./components/Cabinet/DoctorCabinet";
import Services from "./components/Services/Services";
import Appointment from "./components/Appointment/Appointment";


function App() {
  return (
    <>
      <Navbar />
   <div style={{ marginTop: '100px' }}>
   <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/doctorsaccount" element={<DoctorCabinet />}></Route>
        <Route path="/services/:id" element={<Services />}></Route>
        <Route path="/appointment/:id" element={<Appointment />} />
      </Routes>
   </div>

    </>
  );
}

export default App;
