
import './App.css';
import AddData from './Components/AddData';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetData from './Components/GetData';


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<AddData/>}/>
        <Route path='/getdata' element={<GetData/>}/>
      </Routes>
   
   
    </div>
  );
}

export default App;
