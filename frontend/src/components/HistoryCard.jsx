// components/HistoryCard.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import HistoryItem from "./HistoryItem";

export default function HistoryCard() {
  const navigate = useNavigate();
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await API.get('/history');
        // ၁။ ပြောင်းပြန်လှန်မယ် (Latest အရင်လာအောင်)
        // ၂။ slice(0, 2) နဲ့ ထိပ်ဆုံး ၂ ခုပဲ ယူမယ်
        const sorted = res.data.reverse().slice(0, 2);
        setLatestData(sorted);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLatest();
  }, []);

  return (
    <div className="mt-5 p-4 bg-orange-400 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-white font-bold text-lg">History</h1>
        <button
          onClick={() => navigate("/history")}
          className="text-xs bg-white/20 text-white px-3 py-1 rounded-full border border-white/50"
        >
          See All
        </button>
      </div>

      <div className="grid gap-2">
        {latestData.length > 0 ? (
          latestData.map((tx) => (
            <HistoryItem
              key={tx.id}
              title={tx.type === 'sent' ? "Transfer" : "Received"}
              date={tx.date}
              amount={tx.amount}
              type={tx.type === 'received' ? 'in' : 'out'}
            />
          ))
        ) : (
          <p className="text-white text-xs text-center opacity-70">No transactions yet.</p>
        )}
      </div>
    </div>
  );
}
