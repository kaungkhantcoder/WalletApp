export default function HistoryItem({ title, date, amount, type}) {
  return (
    <div className="flex justify-between bg-white rounded-lg p-3 shadow-sm">
      <div>
        <h1 className="text-orange-500 font-bold">{title}</h1>
        <p className="text-[12px] text-orange-400">{date}</p>
      </div>

      <div className="flex items-center justify-center">
        <h1 className={`text-md font-bold ${type === 'in' ? 'text-green-500': 'text-red-500'}`}>
          {type === 'in' ? '+' : '-'}{amount.toLocaleString()} MMK
        </h1>
      </div>

    </div>
  )
}
