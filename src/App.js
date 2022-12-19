import "./App.css";
import UserLogin from "./Components/UserLogin";
import { Routes, Route } from "react-router-dom";
import Portal from "./Components/Portal";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<UserLogin />}></Route>
        <Route exact path="/portal" element={<Portal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
// User Registration
// 1- Name
// 2- Phone Number
// 3- Email id
// 4- Address

// User Login
// User Forget Password
// User Change Password
// Email Verification
