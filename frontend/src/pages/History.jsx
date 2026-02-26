import { useState, useEffect } from "react";
import API from "../api/api";
import HistoryItem from "../components/HistoryItem";

export default function History() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await API.get('/history');

        setTransactions(res.data.reverse());
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-orange-500 text-center text-[1.5rem] font-bold">History</h1>
      <div className="grid gap-3 mt-3 p-4 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-lg">
        {transactions.map((tx) => (
          <HistoryItem
            key={tx.id}
            title={tx.type === 'sent' ? "Transfer to Wallet" : "Received from Wallet"}
            date={tx.date}
            amount={tx.amount}
            type={tx.type === 'received' ? 'in' : 'out'}
          />
        ))}
      </div>
    </div>
  );
}
