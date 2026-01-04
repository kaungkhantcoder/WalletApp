export default function History() {
  return (
    <>
      <div className="grid gap-3 w-full mt-5 p-5 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-lg">
        <div className="flex justify-between bg-white rounded-lg p-3">
          <div>
            <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
            <p className="text-[12px] text-orange-400">4 Jan 2026, 11:11 AM</p>
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-lg font-bold text-green-500">+$5000</h1>
          </div>
        </div>

        <div className="flex justify-between bg-white rounded-lg p-3">
          <div>
            <h1 className="text-orange-500 font-bold">Transfer to Wallet</h1>
            <p className="text-[12px] text-orange-400">4 Jan 2026, 11:11 AM</p>
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-lg font-bold text-red-500">-$5000</h1>
          </div>
        </div>
      </div>
    </>
  );
}
