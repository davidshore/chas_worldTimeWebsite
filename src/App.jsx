import { Link, Route, Routes } from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Contact from "./Contact"
import SingleClock from "./SingleClock";

function App() {

  return ( 
    <div className="bg-slate-900">
      <nav className="flex flex-row justify-between p-8 bg-slate-500 items-center">
        <h1 id="heading" className="text-4xl font-extrabold text-white hover:text-slate-300">
          <Link to="/" element={<Home />}> World Time </Link>
        </h1>
      
          <ul className="text-white font-mono text-xl flex space-x-5">
            <li className="hover:font-bold hover:text-slate-300">
              <Link to="/about">About</Link>
            </li >
            <li className="hover:font-bold hover:text-slate-300">
              <Link to="/contact">
                Contact
              </Link>
            </li>
            <li className="hover:font-bold hover:text-slate-300">
              <Link to="/">Home</Link>
            </li>
            
                
          </ul>
      </nav>
      <main className="min-h-screen p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clock/:cityKey" element={<SingleClock />} />
        </Routes> 
      </main>
          
    </div>
        
  );
}

export default App;
