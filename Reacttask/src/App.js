
import './App.css';
import AddData from './Components/AddData';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import GetData from './Components/GetData';
import PageNotFond from './Components/PageNotFond';


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<AddData/>}/>
        <Route path='/getdata' element={<GetData/>}/>
        <Route path='*' element={<PageNotFond/>}/>
      </Routes>
   
   
    </div>
  );
}

export default App;
