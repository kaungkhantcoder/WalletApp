import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CashOut() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [username, setUser] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cashout/confirm", { state: { phone, username, amount, note } });
  };
  return (
    <>
      <div className="">
        <div className="flex w-full h-[3rem] bg-gradient-to-tr from-orange-500 to-orange-200 rounded-xl justify-center items-center">
          <h1 className="text-white text-center items-center">
            နည်းနည်းပဲ လွှဲမယ်
          </h1>
        </div>

        <div className="w-full mt-3">
          <form className="px-8 pt-6 pb-8 mb-1 " onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="receive number"
              >
                Receiver Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="receiver"
                type="number"
                placeholder="+959 97******8"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="receive name"
              >
                Receiver Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Kaung Khant"
                onChange={(e) => setUser(e.target.value)}
              ></input>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="ammount"
              >
                Ammount
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="ammount"
                type="number"
                placeholder="100"
                onChange={(e) => setAmount(e.target.value)}
              ></input>
              <div className="grid grid-cols-3 gap-3">
                <button className="py-1 px-2 rounded-md border border-orange-300 ">
                  5,000
                </button>
                <button className="py-1 px-2 rounded-md border border-orange-300 ">
                  10,000
                </button>
                <button className="py-1 px-2 rounded-md border border-orange-300 ">
                  50,000
                </button>
                <button className="py-1 px-2 rounded-md border border-orange-300 ">
                  100,000
                </button>
                <button className="py-1 px-2 rounded-md border border-orange-300 ">
                  200,000
                </button>
              </div>

              <div className="mb-4 mt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="note"
                >
                  Note
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="note"
                  type="text"
                  placeholder="အရမ်းချစ်တယ် ထားမသွားဘူး"
                  onChange={(e) => setNote(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Check
              </button>
            </div>
          </form>
          <button
            className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center"
            onClick={() => navigate("/")}
          >
            <h1 className="text-white text-center items-center">Back</h1>
          </button>
        </div>
      </div>
    </>
  );
}
