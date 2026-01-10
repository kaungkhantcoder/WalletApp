import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-3 justify-between mt-5">
        <button
          className="bg-orange-400 p-3 w-full  rounded-lg shadow-md"
          onClick={() => navigate("/cashin")}
        >
          <h3 className="text-white font-bold">Cash In</h3>
        </button>
        <button className="bg-orange-400 p-3 w-full rounded-lg shadow-md"
        onClick={() => navigate("/cashout")}>
          <h3 className="text-white font-bold">Cash Out</h3>
        </button>
      </div>
    </>
  );
}
