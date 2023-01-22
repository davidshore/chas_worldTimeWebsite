import { Route, Routes } from "react-router-dom"
import WorldTime from "./WorldTime";
import Navigation from "./Navigation";
import Stockholm from "./components/Stockholm";
import NewYork from "./components/NewYork";
import Istanbul from "./components/Istanbul"
import London from "./components/London";
import Tokyo from "./components/Tokyo";
import Shanghai from "./components/Shanghai";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";


function App() {
  return (
    
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <WorldTime/> } />
        <Route path="/Stockholm" element={ <Stockholm/> } />
        <Route path="/NewYork" element={ <NewYork/> } />
        <Route path="/Istanbul" element={ <Istanbul/> } />
        <Route path="/London" element={ <London/> } />
        <Route path="/Tokyo" element={ <Tokyo/> } />
        <Route path="/Shanghai" element={ <Shanghai/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
