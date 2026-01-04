export default function Profile() {
    return (
        <>
            <div className="flex justify-between mt-5 mb-5">
                <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-orange-500 "></div>
                    <h1 className="m-2 text-orange-500">Kaung Khant</h1>
                </div>
                <div className="w-10 h-10 rounded-md bg-orange-300 flex items-center justify-center">
                    <h3 className="text-white text-sm font-bold">QR</h3>
                </div>
            </div>
        </>
    )
}