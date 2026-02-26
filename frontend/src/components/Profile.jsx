import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function Profile() {
  const navigate = useNavigate();
  // Take the username from localStorage
  const username = localStorage.getItem("username") || "User";

  return (
    <div className="flex justify-between items-center mt-5 mb-5 px-2">
      <div
        className="flex items-center cursor-pointer hover:opacity-80 transition-all"
        onClick={() => navigate("/profile-settings")} // Setting page 
      >
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
          {username[0].toUpperCase()}
        </div>
        <h1 className="ml-3 text-orange-500 font-bold text-lg">{username}</h1>
      </div>

      <button
        className="w-12 h-12 rounded-xl border-2 border-orange-400 flex items-center justify-center bg-white  active:scale-90 transition-all"
        onClick={() => navigate("/cashin")}
      >
        <QRCodeCanvas size={25} value={username} />
      </button>
    </div>
  );
}
