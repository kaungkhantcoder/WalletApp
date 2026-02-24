import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios

export default function SignIn() {
  const navigate = useNavigate();
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email: email,
        password: password
      });

      if (response.status === 200) {
        //  Store token in the LocalStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        alert("Successful Login");
        navigate("/dashboard"); // Dashboard
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login Error");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col px-6 py-12">
        {/* Back Button */}
        <button className="flex items-center justify-start h-10 " onClick={() => navigate("/")}>
          <h3 className="bg-orange-500 py-2 px-3 text-white rounded-md">Back</h3>
        </button>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight">Sign in to your account</h2>
        </div>

        <div className="mt-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium">Email address</label>
              <div className="mt-2">
                <input
                  type="email"
                  required
                  className="block w-full rounded-md border border-orange-400 px-3 py-1.5 text-black focus:outline-none focus:border-2 focus:border-orange-500"
                  onChange={(e) => setEmail(e.target.value)} // Email
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <div className="mt-2">
                <input
                  type="password"
                  required
                  className="block w-full rounded-md border border-orange-400 px-3 py-1.5 text-black focus:outline-none focus:border-2 focus:border-orange-500"
                  onChange={(e) => setPassword(e.target.value)} // Password
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-orange-400">
                Sign in
              </button>
            </div>
          </form>
          {/* Register link button */}
          <button className="flex w-full justify-center mt-2 text-sm text-orange-500 underline" onClick={() => navigate("/signup")}>
            Register your account
          </button>
        </div>
      </div>
    </>
  );
}
