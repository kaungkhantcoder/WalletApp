import BalanceCard from "../components/BalanceCard";
import Payment from "../components/Paymet";
import Profile from "../components/Profile";
import Services from "../components/Services";
import HistoryCard from "../components/HistoryCard"

const Greeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-orange-500 font-bold">{Greeting()}</h1>
      <Profile />
      <BalanceCard />
      <Payment />
      <Services />
      <HistoryCard />
    </div>
  );
}
