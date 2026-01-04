export default function Buttons() {
    return(
        <>
        <div className="mt-5">
            <h2 className="text-orange-500 font-bold">Services</h2>
            <div className="flex justify-between mt-3 bg-orange-400 p-3 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-600 rounded-full">
                    <h3 className="text-[10px] text-white font-bold">Topup</h3>
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-orange-300 rounded-full">
                    <h3 className="text-[10px] text-white font-bold">Bills</h3>
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-orange-300 rounded-full">
                    <h3 className="text-[10px] text-white font-bold">Gifts</h3>
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-orange-300 rounded-full">
                    <h3 className="text-[10px] text-white font-bold">Travel</h3>
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-orange-300 rounded-full">
                    <h3 className="text-[10px] text-white font-bold">Cards</h3>
                </div>
            </div>
        </div>
            
        </>
    )
}