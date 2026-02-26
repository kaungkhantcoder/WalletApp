import { useNavigate } from "react-router-dom";

export default function ProfileSettings() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const phone = "09xxxxxxxxx"; // fetch from backend

  const handleLogout = () => {
    localStorage.clear(); // Delete token and uername
    navigate("/signin");
  };

  return (
    <div className="p-5 bg-gray-50 rounded-[25px]">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-orange-500 font-bold text-xl">←</button>
        <h1 className="flex-1 text-center font-bold text-gray-800 text-xl">Account Settings</h1>
      </div>

      {/* Profile Info Section */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center mb-6">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-3xl font-bold mb-4">
          {username ? username[0].toUpperCase() : "U"}
        </div>
        <h2 className="text-xl font-bold text-gray-800">{username}</h2>
        <p className="text-gray-400 text-sm">Member since 2026</p>
      </div>

      {/* Menu Options */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-50 flex justify-between items-center">
          <span className="text-gray-600">Phone Number</span>
          <span className="font-semibold text-gray-800">{phone}</span>
        </div>
        <div className="p-4 border-b border-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-50">
          <span className="text-gray-600">Change Password</span>
          <span className="text-gray-400">→</span>
        </div>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full p-4 text-left text-red-500 font-bold hover:bg-red-50 transition-colors"
        >
          Logout Account
        </button>
      </div>

      <p className="text-center text-gray-300 text-xs mt-10 italic">Wallet App Version 1.0.0</p>
    </div>
  );
}
