
 import React, {useState} from "react"
 import { useNavigate } from "react-router-dom";
 import  "./form.css"

 const Form = () => {
    let navigate = useNavigate();
    const [detail_name,setName]= useState('');
    const [detail_email,setEmail]=useState('');
    const [detail_password,setPassword]= useState('');
    const [detail_mobile,setMobile]=useState('');
    const[detail_address,setAddress]=useState('');
    const [detail_city,setCity]=useState('');

   async function form_submit(e){
     e.preventDefault();
     const init={
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name:detail_name,email:detail_email,password:detail_password,mobile:detail_mobile,address:detail_address,city:detail_city})

     }
     let result = await fetch('http://localhost:4000/student',init)
     console.log(result)
     result=  await result.json()
     console.log(result)
     alert('Registration is successfully complete')
     navigate("/Login");
      
      

    }
  return (

        <>

        <div className="svg"></div>
        <form action="" method="post" name="form-submit">
        
        <div  className="submitform">
        <div className="name">
          Name:  <input type="text" placeholder="Enter your name" name="detail_name" className="detail_name" required onChange={(e)=> setName(e.target.value)} value={detail_name} autoComplete/>
            </div> 
            <br />
            <div className="emailform">
                Email : <input type="email" placeholder="Enter your email id" name="detail_email" className="detail_email" required  onChange={(e)=> setEmail(e.target.value)} value={detail_email} autoComplete/>
                
            </div>
            <br />

            <div className="passwordform">
                Password :<input type="password" placeholder="Enter your password" name="detail_password" className="detail_password"  required onChange={(e)=> setPassword(e.target.value)} value={detail_password}  autoComplete/>
                
            </div>
            <br />
            <div className="form_moble">
                Mobile No. :<input type="number" placeholder="Enter your mobile no" name="detail_mobile" className="detail_mobile" required  onChange={(e)=> setMobile(e.target.value)} value={detail_mobile}   autoComplete/>
                
            </div>
            <br />

            <div className="address">
                Address :<input type="text" placeholder="Enter your Address" name="detail_address" className="detail_address" required onChange={(e)=> setAddress(e.target.value)} value={detail_address}   autoComplete/>
                
            </div>
            <br />
            <div className="form_location">
             City : <input type="text" placeholder="Enter your city" name="detail_city" className="detail_city" required onChange= {(e)=> setCity(e.target.value)} value={detail_city}   autoComplete />
            </div>
            <div className="btn">
                <input type="submit" className="submit-btn" onClick={form_submit}/>
            </div>

        </div>




        </form>
        </>
  )
}

export default Form;
