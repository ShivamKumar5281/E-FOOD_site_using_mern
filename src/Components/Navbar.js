import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


import "./Navbar.css"






const Navbar=(props)=>{
   const [a,setA]=useState(false)
   const navigate= useNavigate();

  useEffect(()=>{
    const A=sessionStorage.getItem("isLoggedIn")
    console.log("A : ",A)
   setA(A)
   console.log('navbar page',a)


  })
  

  const logout = ()=> {

    // sessionStorage.setItem("isLoggedIn",false)
    sessionStorage.clear();
    setA(false)
    console.log("logout function",sessionStorage.isLoggedIn)
    window.alert("Logout SuccessFully")
  navigate("/")
    

  }
  
    

  

    

    

return(
<>     

<nav className="main_nav">
  
  {/* <div className="logo"></div>
  <div className="nav-text">
    GET - FOOD
  </div> */}
    {a ? (<div className="account">{sessionStorage.getItem("name")}</div>):  (<><div className="logo"></div> <div className="nav-text"> GET - FOOD</div>    </>)}
  <ul>

 <li><Link to="/">Home</Link></li>

 <li><Link to="/About">About us</Link></li>
 <li><Link to="/Restaurant">Our-Restaurants</Link></li>
  
 {

      a ? <li><Link to="/Services">Services</Link></li> :  <li><Link to="/Login ">Services</Link></li>  


 }


   
   
   
 

  
  <li><button onClick={logout}>Log Out</button></li>




</ul>  




</nav>
</>
)
}
export default Navbar;




