import HistoryCard from "../components/HistoryCard";
import { useNavigate } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-5">
        <h1 className="text-orange-500 text-center text-[1.5rem] font-bold">
          History
        </h1>

        <div className="grid gap-3 w-full mt-3 p-4 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-lg">
          <div className="flex justify-between bg-white rounded-lg p-3">
            <div>
              <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
              <p className="text-[12px] text-orange-400">
                10 Jan 2026, 11:11 AM
              </p>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-md font-bold text-green-500">+5,000 MMK</h1>
            </div>
          </div>

          <div className="flex justify-between bg-white rounded-lg p-3">
            <div>
              <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
              <p className="text-[12px] text-orange-400">
                4 Jan 2026, 11:11 AM
              </p>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-md font-bold text-red-500">-5,000 MMK</h1>
            </div>
          </div>

          <div className="flex justify-between bg-white rounded-lg p-3">
            <div>
              <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
              <p className="text-[12px] text-orange-400">
                9 Jan 2026, 11:30 PM
              </p>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-md font-bold text-red-500">-5,000 MMK</h1>
            </div>
          </div>

          <div className="flex justify-between bg-white rounded-lg p-3">
            <div>
              <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
              <p className="text-[12px] text-orange-400">
                10 Dec 2025, 11:11 AM
              </p>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-md font-bold text-red-500">-5,000 MMK</h1>
            </div>
          </div>

          <div className="flex justify-between bg-white rounded-lg p-3">
            <div>
              <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
              <p className="text-[12px] text-orange-400">
                4 Dec 2025, 11:11 AM
              </p>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-md font-bold text-red-500">-10,000 MMK</h1>
            </div>
          </div>

          <div className="flex justify-between bg-white rounded-lg p-3">
            <div>
              <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
              <p className="text-[12px] text-orange-400">
                4 Jan 2026, 11:11 AM
              </p>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-md font-bold text-red-500">-50,000 MMK</h1>
            </div>
          </div>
        </div>
        <button
          className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center mt-5"
          onClick={() => navigate("/home")}
        >
          <h1 className="text-white text-center items-center">Back</h1>
        </button>
      </div>
    </>
  );
}
