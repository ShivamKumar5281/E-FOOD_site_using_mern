import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import "./login.css"
 const Login5 = () => {
  
let navigate = useNavigate();
 



const [detail_email,setEmail]=useState('');
  const [detail_password,setPassword]= useState('');

  const [isLoggedIn,setLoggedin]=useState(false);
  useEffect(()=> {
    const a =sessionStorage.getItem("isLoggedIn")
    setLoggedin(a)

  })


  



  async function form_submit(e){
    
    e.preventDefault();
    
    
    if(detail_email && detail_password) {
    const init={
       method:'POST',
       headers:{
           'Content-Type': 'application/json'
       },
       body:JSON.stringify({email:detail_email,password:detail_password})

    }
    try {
    let result = await fetch('http://localhost:4000/details',init)
     result=  await result.json()
   if(result.EMAIL && result.PASSWORD) {
    sessionStorage.setItem("isLoggedIn",true);
    sessionStorage.setItem("name",result.NAME);

      sessionStorage.setItem("email",result.EMAIL);
    navigate("/admin-page")
   }   else {
      console.log('Error')
      window.alert('Either Email or Password is not exist')

      window.alert('Either Email or Password is not exist')
      window.location.reload()

    // result=  await result.json()
    // console.log(result)
    navigate("/");
    }
  }
  catch (error) {
    console.log('Error')
    window.alert('Either Email or Password is not exist')
  }
  }
  else {
    window.alert('All Fields are required ')
  }



     
     

   }
return (

  <>

  <form action="" method="post" className="login-form">
      <div className="main-form"  style={{backgroundColor:'green'}}>
      <div  className="login-email">
     Admin  Email  Id : <input type="text" placeholder="Enter your resgisetred email id" className="formemail"  onChange={(e)=>setEmail(e.target.value)} value={detail_email}  required ='required' />
      </div>
      <br />
      
      <div className="login-password">
        Password: <div className="login-password-2"> <input type="password" placeholder="Enter password" className="formemail"  onChange={(e)=> setPassword(e.target.value)} value={detail_password}  required/>     </div>
      </div>
      <br />

      <div className="submit">
          <input type="submit"  className="submit-login"  onClick={form_submit}/>
      </div>
      </div>





  </form>



  </>
)

}


export default Login5;