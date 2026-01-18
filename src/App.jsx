import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CashIn from "./pages/CashIn";
import CashOut from "./pages/CashOut";
import Confirm from "./pages/Confirm";
import History from "./pages/History";
import Success from "./pages/Success";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-[375px] h-[42rem] mx-auto m-5 p-5 border-[5px] shadow-md border-black rounded-[30px]">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
            <Route path="/cashin" element={<CashIn />}></Route>
            <Route path="/cashout" element={<CashOut />}></Route>
            <Route path="/cashout/confirm" element={<Confirm />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="cashout/confirm/success" element={<Success />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
