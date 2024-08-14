import logo from './logo.svg';
import './App.css';
// import "./index.css"
// import Signup from './Components/Signup/Signup';
// import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

// import Login from './Components/Login/Login';
import NavBar from "./Components/NavBar/NavBar"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import Card from './Components/Card/Card';
import Men from './Components/Men/Men';
import Detail from './Components/Detail/Detail';
import Women from './Components/Women/Women';
import Cart from './Components/Cart/Cart';


function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log( apiUrl);
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>

      <Route path='/' element={<Main/>}/>
      {/* <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/Login' element={<Login/>}/> */}
      <Route path='/men' element={<Men/>}/>
      <Route path='/detail/:any' element={<Detail/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/cart' element={<Cart/>}/>



      


 
      </Routes>
      <Footer/>
      {/* <Card/> */}
      
      </BrowserRouter>
  </div>
  );
}

export default App;
