export default function Payment() {
    return (
        <>
            <div className="flex justify-between mt-5">
                <button className="bg-orange-400 p-3 rounded-lg shadow-md">
                    <h3 className="text-white font-bold">Transfer</h3>
                </button>
                <button className="bg-orange-400 p-3 rounded-lg shadow-md">
                    <h3 className="text-white font-bold">Cash In</h3>
                </button>
                <button className="bg-orange-400 p-3 rounded-lg shadow-md">
                    <h3 className="text-white font-bold">Cash Out</h3>
                </button>
            </div>
        </>
    )
}