
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Login from './Component/Login/Login';
import Footer from './Footer/Footer';
import Header from '../src/Component/Header/Header';
import Experts from './Component/Experts/Experts';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div>
      
      
 <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/'></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path='/expert' element={<Experts></Experts>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

       <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
