
import {
  BrowserRouter as Router ,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Page from "./Components/Page"; 
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Restaurant from "./Components/Restaurant";
import Service from "./Components/Service";
import  Footer  from "./Components/Footer";
import Login from "./Components/Registration/Login";
import Form from "./Components/Registration/Form";
import { Food_Order } from "./Components/Food_Order";
import Login5 from "./Components/Registration/Login5";
import Adminpage from "./Components/Adminpage";


function App() {
  return (
<>
   {/* <Navbar/> */}
   <Router>
   <Navbar/>

    <Routes>

   <Route path="/"  element ={<Page/>} ></Route>
   <Route path="/about"  element ={<About/>} ></Route>
   <Route path="/Restaurant"  element ={<Restaurant/>} ></Route>
   <Route path="/Services"  element ={<Service/>} ></Route>
   <Route path="/Login" element = {<Login/>}></Route>
   <Route path="/Submit" element= {<Form />}></Route>
   <Route path="/food_order" element={<Food_Order/>}></Route>
   <Route path="/login_admin" element={<Login5/>}></Route>
   <Route path="/admin-page"  element={<Adminpage/>}></Route>


     </Routes>

    
    
    </Router> 


    <Footer />




</>

  );
}

export default App;
