import logo from './logo.svg';
import './App.css';
import Bot from './components/Bot';
import Home from './components/Home';
import Hidden from './components/Hidden';

import { BrowserRouter, Routes, Route} from "react-router-dom";

 function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hidden" element={<Hidden/>}/>
   </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
