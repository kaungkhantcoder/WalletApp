import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://127.0.0.1:5000/register", formData)
      if (response.status === 201) {
        alert("Your account has been created")
        navigate("/signin")
      }
    } catch (error) {
      alert(error.response?.data?.error || "Something went wrong!")
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col px-6 py-12">
        <button className="flex items-center justify-start h-10 " onClick={() => navigate("/")}>
          <h3 className="bg-orange-500 py-2 px-3 text-white rounded-md">Back</h3>
        </button>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight">Create your account</h2>
        </div>

        <div className="mt-10">
          <form className="space-y-4" onSubmit={handleRegister}>

            {/* Phone Number Input */}
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="number"
                required
                className="block w-full rounded-md border border-orange-400 px-3 py-1.5"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                required
                className="block w-full rounded-md border border-orange-400 px-3 py-1.5"
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium">Email address</label>
              <input
                type="email"
                required
                className="block w-full rounded-md border border-orange-400 px-3 py-1.5"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                required
                className="block w-full rounded-md border border-orange-400 px-3 py-1.5"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <button type="submit" className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-white font-semibold hover:bg-orange-400">
              Sign Up
            </button>
          </form>

          <button className="flex w-full justify-center mt-2 text-sm text-orange-600 font-semibold" onClick={() => navigate("/signin")}>
             Already have account
          </button>
        </div>
      </div>
    </>
  );
}
