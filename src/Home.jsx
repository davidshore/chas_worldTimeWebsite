import Clock from "./Clock";
const Home = () => {
    return ( <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
    <Clock cityKey={"london"}  />
    <Clock cityKey={"stockholm"} />
  </div>);
}
 
export default Home;