import { useState, useEffect } from "react";
import API from "../api/api";

export default function BalanceCard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await API.get('/balance');
        setBalance(res.data.balance);
      } catch (err) {
        console.error("Balance fetch error:", err);
      }
    };
    fetchBalance();
  }, []);

  return (
    <div className="mt-5 p-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl shadow-lg text-white">
      <p className="text-sm opacity-80">Your Balance</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-xl font-bold">MMK</span>
        <h1 className="text-4xl font-extrabold">
          {Number(balance).toLocaleString()}
        </h1>
      </div>
    </div>
  );
}
