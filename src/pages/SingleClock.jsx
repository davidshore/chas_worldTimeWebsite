import Clock from "./Clock";

function SingleClock() {
  return (
    <div className="page-container">
      <h1>SingleClock</h1>
      <Clock city={"Stockholm"} timeZone={"Europe/Stockholm"} country={"Sweden"} small={false} />
    </div>
  );
}

export default SingleClock;
