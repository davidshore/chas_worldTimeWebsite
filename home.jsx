import Clock from "./Clock";

export default function Home() {
  return (
    <div>
      <Clock cityKey={"stockholm"} />
      <Clock cityKey={"london"} />
    </div>
  );
}
