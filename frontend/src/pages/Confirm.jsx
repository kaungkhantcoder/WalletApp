import { useLocation, useNavigate } from "react-router-dom";
import API from "../api/api";
import { useState } from "react";

export default function Confirm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (!state) {
    return (
      <div className="p-10 text-center">
        <p>No data found.</p>
        <button onClick={() => navigate("/cashout")} className="text-orange-500 underline">Go Back</button>
      </div>
    );
  }

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const response = await API.post("/transfer", {
        receiver_phone: state.phone,
        amount: state.amount,
        note: state.note,
      });

      if (response.status === 200) {
        navigate("/cashout/confirm/success", { state: {...state}});
      }
    } catch (error) {
      alert(error.response?.data?.message || "Transaction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" bg-gray-50 p-5 flex flex-col items-center  rounded-[25px]">
      {/* Header with Back Button */}
      <div className="w-full max-w-md flex items-center mb-8">
        <button
          onClick={() => navigate("/cashout", { state: {...state}})}
          className="p-2 bg-white rounded-full shadow-sm text-orange-500 hover:bg-orange-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h1 className="flex-1 text-center text-xl font-bold text-gray-800 mr-8">Confirmation</h1>
      </div>

      {/* Transfer Detail Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-lg font-bold text-gray-700">{state.username || "Unknown Receiver"}</h2>
          <p className="text-gray-400 text-sm">{state.phone}</p>
        </div>

        <div className="space-y-4 border-t border-b border-gray-50 py-6 mb-8">
          <div className="flex justify-between">
            <span className="text-gray-400">Amount</span>
            <span className="font-bold text-gray-800">{Number(state.amount).toLocaleString()} MMK</span>
          </div>
          {state.note && (
            <div className="flex flex-col pt-2">
              <span className="text-gray-400 mb-1">Note</span>
              <span className="text-gray-600 bg-gray-50 p-3 rounded-xl text-sm italic">"{state.note}"</span>
            </div>
          )}
        </div>

        <button
          onClick={handleConfirm}
          disabled={loading}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all
            ${loading ? 'bg-orange-300' : 'bg-orange-500 text-white hover:bg-orange-600 active:scale-95'}`}
        >
          {loading ? "Processing..." : "Confirm & Send"}
        </button>
      </div>

      <p className="mt-8 text-gray-400 text-xs px-10 text-center">
        Please double check the receiver information before confirming your transaction.
      </p>
    </div>
  );
}
