import { useNavigate, useLocation } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const { state } = useLocation(); // The data from  Confirm page

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-white text-center">

      {/* Success Icon Animation */}
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
        <svg
          className="w-12 h-12 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Transfer Success!
      </h1>

      {/* Show the ammount  */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm">Amount Sent</p>
        <h2 className="text-3xl font-extrabold text-orange-500">
          {state?.amount ? Number(state.amount).toLocaleString() : "0"} <span className="text-sm">MMK</span>
        </h2>
      </div>

      {/* Show Receiver name */}
      <div className="bg-gray-50 rounded-2xl p-4 w-full max-w-xs mb-8">
        <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Receiver</p>
        <p className="font-bold text-gray-700">{state?.username || "Unknown"}</p>
        <p className="text-gray-500 text-sm">{state?.phone}</p>
      </div>

      <button
        onClick={() => navigate("/home")}
        className="w-full max-w-xs py-3 bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 active:scale-95 transition-all"
      >
        Done
      </button>

      <button
        onClick={() => navigate("/history")}
        className="mt-4 text-orange-500 font-semibold hover:underline"
      >
        View History
      </button>
    </div>
  );
}
