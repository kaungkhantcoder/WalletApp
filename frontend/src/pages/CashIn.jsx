import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

export default function CashIn() {
  const navigate = useNavigate()

  return (
    <>
      <div className="p-5">
        <div className="flex w-full h-[3rem] bg-gradient-to-tr from-orange-500 to-orange-200 rounded-xl justify-center items-center">
          <h1 className="text-white text-center items-center">
           Cash In
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-3 bg-gradient-to-tl from-orange-300 to-orange-500 mt-5 p-5 rounded-xl">
          <div>
            <h2 className="block text-center text-white">Scan to my QR</h2>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex justify-center items-center rounded-xl bg-white w-[12rem] h-[12rem]">
              <QRCodeSVG value="+959 96938834" size={128}/>
            </div>
          </div>
        </div>

        <div className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center mt-5">
          <h1 className="text-white text-center items-center">+959 96938834</h1>

        </div>

        <button className="flex w-full h-10 bg-orange-500 rounded-xl justify-center items-center mt-[11rem]"
        onClick={() => navigate("/home")}>
          <h1 className="text-white text-center items-center">
            Back
          </h1>
        </button>
      </div>
    </>
  );
}
