import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CashIn from "./pages/CashIn";
import CashOut from "./pages/CashOut";
import Confirm from "./pages/Confirm";
import History from "./pages/History";
import Success from "./pages/Success";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileSettings from "./pages/ProfileSettings";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-[375px] h-[42rem] mx-auto m-5  border-[5px] shadow-md border-black rounded-[30px]">
          <Routes>
            {/* Login ဝင်ထားသူများသာ သုံးနိုင်မည့် Route များ */}
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
            <Route path="/cashin" element={<CashIn />}></Route>
            <Route path="/cashout" element={<ProtectedRoute><CashOut /></ProtectedRoute>} ></Route>
            <Route path="/cashout/confirm" element={<ProtectedRoute><Confirm /></ProtectedRoute>} ></Route>
            <Route path="/cashout/confirm/success" element={<ProtectedRoute><Success /></ProtectedRoute>} ></Route>
            <Route path="/profile-settings" element={<ProtectedRoute><ProfileSettings/></ProtectedRoute>} ></Route>
            <Route path="/history" element={<History />}></Route>

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
