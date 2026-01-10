import { useNavigate } from "react-router-dom";

export default function Confirm() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <form class="px-4 pt-6 pb-8 mb-4 ">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm  text-center font-bold mb-2"
                for="receive number"
              >
                Receiver Number
              </label>
              <div className="flex w-full rounded-xl h-10 bg-white border border-orange-500 justify-center items-center">
                <h3 className="text-center">09970000008</h3>
              </div>
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm text-center font-bold mb-2"
                for="receive name"
              >
                Receiver Name
              </label>
              <div className="flex w-full rounded-xl h-10 bg-white border border-orange-500 justify-center items-center">
                <h3 className="text-center">Kaung Khant</h3>
              </div>
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm text-center font-bold mb-2"
                for="receive name"
              >
                 Ammount
              </label>
              <div className="flex w-full rounded-xl h-10 bg-white border border-orange-500 justify-center items-center">
                <h3 className="text-center">50,000 MMK</h3>
              </div>
            </div>
          </form>
        </div>
        <div>
          <button
            className="flex w-full h-10 border-2  border-orange-500 rounded-xl justify-center items-center mt-5"
            onClick={() => navigate("/cashout")}
          >
            <h1 className="text-orange-500 text-center">Back</h1>
          </button>

          <button
            className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center mt-3"
            onClick={() => navigate("/cashout/confirm/success")}
          >
            <h1 className="text-white text-center">Confirm</h1>
          </button>
        </div>
      </div>
    </>
  );
}
