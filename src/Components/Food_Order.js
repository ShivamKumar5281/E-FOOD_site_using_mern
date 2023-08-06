import React from 'react'
import { useState } from 'react'
import "./food_order.css"
import { useNavigate } from 'react-router-dom'


export const Food_Order = () => {
    const navigate = useNavigate();


    const [num,setNum]=useState('');
    
    const orderFood = ()=> {
        if(num!= '')  {
     alert(`Your food is order now , You will get your food at ${num}`)
     alert('Thank you for ordering food')
     navigate("/")
    }  else {
    alert("Fill this form ")

    }



    }
  return (
   
    <div className='food_order'>
        

    Address : <input type="text" id='food' placeholder='Enter your Address where you want to get food ' onChange={(e)=>{setNum(e.target.value)}} value={num}/>
    <br /> 
    <br />
    <input  id='submit' type="submit" value='order' onClick={orderFood}/>
    </div>







  )
}
