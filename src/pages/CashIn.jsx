import { useNavigate } from "react-router-dom";

export default function CashIn() {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <div className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center">
          <h1 className="text-white text-center items-center">
            ဝင်လာမဆဲ တသဲသဲ
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-3 bg-gradient-to-tl from-orange-300 to-orange-500 mt-5 p-5 rounded-xl">
          <div>
            <h2 className="block text-center text-white">QR ဖတ်ရန်</h2>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex justify-center items-center rounded-xl bg-white w-[12rem] h-[12rem]">
              <div className="w-32 h-32 bg-black"></div>
            </div>
          </div>
        </div>

        <div className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center mt-5">
          <h1 className="text-white text-center items-center">+959 96938834</h1>
        </div>

        <button className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center mt-[11rem]"
        onClick={() => navigate("/")}>
          <h1 className="text-white text-center items-center">
            Back
          </h1>
        </button>
      </div>
    </>
  );
}
