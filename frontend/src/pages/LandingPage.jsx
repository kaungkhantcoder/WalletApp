import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-full bg-gradient-to-tr from-orange-300 to-orange-500 rounded-[25px]  items-center justify-center">
        <div>
          <div className="text-white p-5 text-center">
            <h1 className="text-[3rem] mb-5">💸</h1>
            <h1 className="text-4xl font-bold">Your Wallet</h1>
          </div>

          <div className="">
            <button
              className="flex w-full h-10 bg-white rounded-md font-medium justify-center items-center mt-5"
              onClick={() => navigate("/signin")}
            >
              <h1 className="text-orange-500 text-center">SIGN IN</h1>
            </button>

            <button
              className="flex w-full h-10 bg-white rounded-md font-medium justify-center items-center mt-5"
              onClick={() => navigate("/register")}
            >
              <h1 className="text-orange-500 text-center">SIGN UP</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
