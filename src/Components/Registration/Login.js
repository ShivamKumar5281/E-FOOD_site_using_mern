  import React, { useEffect } from "react";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import "./login.css"
  

 
  

 const Login = () => {
  let navigate = useNavigate();
   
  
  

  const [detail_email,setEmail]=useState('');
    const [detail_password,setPassword]= useState('');
    const [isLoggedIn,setLoggedin]=useState(false);
    // sessionStorage.setItem("isLoggedIn",isLoggedIn);

    useEffect(()=> {
      const a =sessionStorage.getItem("isLoggedIn")
      setLoggedin(a)

    })
    
    



    async function form_submit(e){
      
      e.preventDefault();
      if(isLoggedIn){
        window.alert("Already Login")

      }
      else {
      if(detail_email && detail_password) {
      const init={
         method:'POST',
         headers:{
             'Content-Type': 'application/json'
         },
         body:JSON.stringify({email:detail_email,password:detail_password})
 
      }
      try {
      let result = await fetch('http://localhost:4000/getDetails',init)
      
      result=  await result.json()
      
      

      // if(result.ok == true )
     if(result.email && result.password) {
      sessionStorage.setItem("isLoggedIn",true);
      sessionStorage.setItem("name",result.name);
      sessionStorage.setItem("email",result.email);
       
      console.log("Login page",sessionStorage.isLoggedIn)
       
      


        navigate("/Services")
        window.location.reload()
        
        // console.log(result)
         
         
        // result=  await result.json()

        
      }else {
        console.log('Error')
        window.alert('Either Email or Password is not exist')
        console.log(result)
        window.alert('Either Email or Password is not exist')

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

       
       
 
     }
  return (

    <>

    <form action="" method="post" className="login-form">
        <div className="main-form">
        <div  className="login-email">
       Resgistered Email Id: <input type="text" placeholder="Enter your resgisetred email id" className="formemail"  onChange={(e)=>setEmail(e.target.value)} value={detail_email}  required ='required' />
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

export default Login;

