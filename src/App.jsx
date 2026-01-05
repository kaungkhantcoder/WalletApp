import BalanceCard from "./components/BalanceCard";
import Buttons from "./components/Services";
import Profile from "./components/Profile";
import Payment from "./components/Paymet";
import History from "./components/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Greeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}


export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes></Routes>
    </BrowserRouter>
    <div className="w-[375px] h-auto mx-auto m-5 p-5 border-[5px] shadow-md border-black rounded-[30px]">
      <h1 className="text-orange-500 font-bold">{Greeting()}</h1>
      <Profile />
      <BalanceCard />
      <Payment />
      <Buttons />
      <History />
    </div>

    </>
  )
} 