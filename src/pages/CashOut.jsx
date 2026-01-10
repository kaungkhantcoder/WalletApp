import { useNavigate } from "react-router-dom";

export default function CashOut() {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center">
          <h1 className="text-white text-center items-center">
            နည်းနည်းပဲ လွှဲမယ်
          </h1>
        </div>

        <div class="w-full mt-5">
          <form class="px-8 pt-6 pb-8 mb-1 ">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="receive number"
              >
                Receiver Number
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="receiver"
                type="number"
                placeholder="+959 97******8"
              ></input>
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="receive name"
              >
                Receiver Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Kaung Khant"
              ></input>
            </div>

            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="ammount"
              >
                Ammount
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="ammount"
                type="number"
                placeholder="100"
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

              <div class="mb-4 mt-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="note"
                >
                  Note
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="note"
                  type="text"
                  placeholder="အရမ်းချစ်တယ် ထားမသွားဘူး"
                ></input>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => navigate("/confirm")}
              >
                Check
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-400"
                href="#"
              >
                Forgot Password?
              </a>
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
