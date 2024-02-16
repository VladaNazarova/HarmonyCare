import { Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./components/Auth/Registration";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import DoctorCabinet from "./components/Cabinet/DoctorCabinet";
import Services from "./components/Services/Services";
import ClientCabinet from "./components/ClientAccount/ClientCabinet";
import ClientCreation from "./components/UserCreation/ClientCreation";
import Appointment from "./components/Appointment/Appointment";
import PayButton from "./components/Payment/PayButton";
import EnterMail from "./components/Password/EnterMail";
import UpdatePassword from "./components/Password/UpdatePassword";
import About from "./components/About/About";
import NewsList from "./components/News/NewsList";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="/doctorsaccount" element={<DoctorCabinet />}></Route>

          <Route path="/clientsaccount" element={<ClientCabinet />}></Route>
          <Route path="/usercreation" element={<ClientCreation />}></Route>
          <Route path="/forgotpassword" element={<EnterMail />}></Route>

          <Route path="/payment" element={<PayButton />}></Route>
          <Route path="/testnews" element={<NewsList articles={[]} />} />
          <Route path="/:name" element={<Services />}></Route>

          <Route
            path="/resetpassword/:token"
            element={<UpdatePassword />}
          ></Route>
          <Route
            path="/appointment/:specialization"
            element={<Appointment />}
          ></Route>

          <Route path="/services/:id" element={<Services />}></Route>
        </Routes>
        <div style={{ marginTop: "100px" }} >
        <Footer />
        </div>

      </div>

    </>
  );
}

export default App;
