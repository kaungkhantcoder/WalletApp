import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({ old_password: "", new_password: "" });
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (passwords.new_password.length < 6) return alert("Password must be 6+ chars");

    setLoading(true);
    try {
      const res = await API.put("/user/change_password", passwords);
      alert(res.data.message);
      navigate(-1); // အောင်မြင်ရင် Setting page ကို ပြန်သွားမယ်
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 rounded-[25px] bg-gray-50">
      {/* Header with Back Button */}
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-orange-500 font-bold text-xl">←</button>
        <h1 className="flex-1 text-center font-bold text-gray-800 text-xl">Change Password</h1>
      </div>

      <form onSubmit={handleUpdate} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2 ml-1">Current Password</label>
          <input
            type="password"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:border-orange-500"
            placeholder="Enter old password"
            onChange={(e) => setPasswords({...passwords, old_password: e.target.value})}
            required
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-600 text-sm mb-2 ml-1">New Password</label>
          <input
            type="password"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:border-orange-500"
            placeholder="Enter new password"
            onChange={(e) => setPasswords({...passwords, new_password: e.target.value})}
            required
          />
        </div>

        <button
          disabled={loading}
          className={`w-full py-4 rounded-2xl font-bold text-white transition-all
            ${loading ? "bg-orange-300" : "bg-orange-500 hover:bg-orange-600 shadow-orange-100"}`}
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}
