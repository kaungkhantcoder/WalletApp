import { useNavigate } from "react-router-dom";

export default function HistoryCard() {
  const navigate = useNavigate()
  return (
    <>
      <div className="grid gap-3 w-full mt-3 p-4 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-bold">History</h1>
          <button className="py-1 px-2 rounded-md border border-white" onClick={() => navigate("/history")}>
            <p className="text-white text-sm">See All</p>
          </button>
        </div>
        <div className="flex justify-between bg-white rounded-lg p-3">
          <div>
            <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
            <p className="text-[12px] text-orange-400">4 Jan 2026, 11:11 AM</p>
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-md font-bold text-green-500">+5000 MMK</h1>
          </div>
        </div>

        <div className="flex justify-between bg-white rounded-lg p-3">
          <div>
            <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
            <p className="text-[12px] text-orange-400">4 Jan 2026, 11:11 AM</p>
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-md font-bold text-red-500">-5000 MMK</h1>
          </div>
        </div>
      </div>
    </>
  );
}
