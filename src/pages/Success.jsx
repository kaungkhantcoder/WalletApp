import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <div className="text-center text-[50px]">
            <p>✅</p>
          </div>
          <h1 className="text-center text-[30px]">Success</h1>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3">
          <div className="bg-gray-200 flex justify-between p-3">
            <h3 className="font-semibold">ID</h3>
            <h3 className="text-orange-500">19216811</h3>
          </div>
          <div className="bg-gray-200 flex justify-between p-3">
            <h3 className="font-semibold">Name</h3>
            <h3 className="text-orange-500">Kaung Khant</h3>
          </div>
          <div className="bg-gray-200 flex justify-between p-3">
            <h3 className="font-semibold">Phone Number</h3>
            <h3 className="text-orange-500">09970000008</h3>
          </div>
          <div className="bg-gray-200 flex justify-between p-3">
            <h3 className="font-semibold">Ammount</h3>
            <h3 className="text-orange-500">50,000 MMK</h3>
          </div>
        </div>
        <button
          className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center mt-10"
          onClick={() => navigate("/")}
        >
          <h1 className="text-white text-center">OK</h1>
        </button>
      </div>
    </>
  );
}
