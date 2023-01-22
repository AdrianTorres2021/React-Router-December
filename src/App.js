import './App.css';
import { Routes, Route, Link} from "react-router-dom";
import Home from './Views/Home';
import Num4 from './Components/Num4'
import Hello from './Components/hello';
import Bluered from './Components/Bluered';

function App() {
  return (
   <div className="App">
      <p>
        <Link to="/home">Home</Link>
        <Link to="/4">Page4</Link>
        <Link to="/hello">Hello</Link>
        <Link to="/hello/blue/red">bluered</Link>
      </p>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/4' element={<Num4 />} />
        <Route path='/hello' element={<Hello />} />
        <Route path='/hello/blue/red' element={<Bluered />} />
      </Routes>
   </div>
  );
}

export default App;
