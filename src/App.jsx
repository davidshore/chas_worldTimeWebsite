import { Route, Routes } from "react-router-dom"
import WorldTime from "./WorldTime";
import Navigation from "./Navigation";
import Stockholm from "./components/Stockholm";
import London from "./components/London";
import NewYork from "./components/NewYork";

function App() {
  return (
    
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <WorldTime/> } />
        <Route path="/Stockholm" element={ <Stockholm/> } />
        <Route path="/NewYork" element={ <NewYork/> } />
        <Route path="/London" element={ <London/> } />

      </Routes>
    </div>
  );
}

export default App;
