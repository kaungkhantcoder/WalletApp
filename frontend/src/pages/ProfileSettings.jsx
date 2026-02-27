import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function ProfileSettings() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", phone: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/user/me");
        setUser(res.data);
      } catch (err) { console.error(err); }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="p-5 bg-gray-50  rounded-[25px]">
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-orange-500 font-bold text-xl">←</button>
        <h1 className="flex-1 text-center font-bold text-gray-800 text-xl">Account Settings</h1>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center mb-6">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-3xl font-bold mb-4">
          {user.username ? user.username[0].toUpperCase() : "U"}
        </div>
        <h2 className="text-xl font-bold text-gray-800">{user.username}</h2>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-50 flex justify-between items-center">
          <span className="text-gray-600">Phone Number</span>
          <span className="font-semibold text-gray-800">{user.phone}</span>
        </div>

        {/* ဒီနေရာမှာ နှိပ်လိုက်ရင် သွားမယ် */}
        <div
          onClick={() => navigate("/change-password")}
          className="p-4 border-b border-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-50"
        >
          <span className="text-gray-600">Change Password</span>
          <span className="text-gray-400 text-xl">→</span>
        </div>

        <button onClick={handleLogout} className="w-full p-4 text-left text-red-500 font-bold hover:bg-red-50 transition-colors">
          Logout Account
        </button>
      </div>
    </div>
  );
}
