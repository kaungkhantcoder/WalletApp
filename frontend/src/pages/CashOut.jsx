import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function CashOut() {
  const navigate = useNavigate();
  const { state: incomingState } = useLocation();

  const [phone, setPhone] = useState(incomingState?.phone || "");
  const [username, setUser] = useState(incomingState?.username || "");
  const [amount, setAmount] = useState(incomingState?.amount || "");
  const [note, setNote] = useState(incomingState?.note || "");

  const quickAmounts = ["5,000", "10,000", "50,000", "100,000", "200,000"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length < 9) {
      alert("Please check your phone number");
      return;
    }
    if (!amount || amount <= 500) {
      alert("Need more than 500");
    }
    navigate("/cashout/confirm", { state: { phone, username, amount, note } });
  };

  return (
    <>
      <div className="p-5">
        <div className="flex w-full h-[3rem] bg-gradient-to-tr from-orange-500 to-orange-200 rounded-xl justify-center items-center">
          <h1 className="text-white text-center font-bold">Transcript</h1>
        </div>

        <div className="w-full mt-3">
          <form className="px-8 pt-6 pb-8 mb-1" onSubmit={handleSubmit}>
            {/* Receiver Number */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Receiver Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange-500"
                type="text"
                inputMode="numeric"
                placeholder="09..."
                value={phone}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d*$/.test(val)) setPhone(val);
                }}
                required
              />
            </div>

            {/* Receiver Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Receiver Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange-500"
                type="text"
                placeholder="Name (Optional)"
                value={username}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Amount
              </label>
              <input
                className="shadow appearance-none border border-orange-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-orange-500"
                type="number"
                placeholder="100"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {quickAmounts.map((val) => (
                  <button
                    key={val}
                    type="button"
                    className="py-1 px-2 rounded-md border border-orange-300 text-xs hover:bg-orange-100 active:bg-orange-200 transition-colors"
                    onClick={() => setAmount(val.replace(/,/g, ""))}
                  >
                    {val}
                  </button>
                ))}
              </div>

              {/* Note */}
              <div className="mb-4 mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Note
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange-500"
                  type="text"
                  placeholder="Message..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:shadow-outline transition-all"
                type="submit"
              >
                Check
              </button>
            </div>
          </form>

          <button
            className="flex w-full h-10 bg-gray-200 rounded-xl justify-center items-center text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
            onClick={() => navigate("/home")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}
