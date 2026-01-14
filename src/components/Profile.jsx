import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between mt-5 mb-5">
        <div className="flex">
         
          <h1 className="m-2 text-orange-500">Kaung Khant</h1>
        </div>
        <button
          className="w-10 h-10 rounded-md border-2 border-orange-400  flex items-center justify-center"
          onClick={() => navigate("/cashin")}
        >
          <QRCodeCanvas size={25} />
        </button>
      </div>
    </>
  );
}
