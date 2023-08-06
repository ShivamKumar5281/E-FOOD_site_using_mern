import React from 'react'
import "./adminpage.css"

 const Adminpage = () => {
  return (
         <>
      <h1  style={{textAlign:'center',fontSize:'53px', textDecorationLine:'underline'}}>Admin Page </h1> 
      <div className="admin-page">
       <div className="container-1   container  "><a href="#">Add Restaurants</a></div>
       <div className="container-2   container"><a href="#">Add Food Choices</a></div>
       <div className="container-3   container"><a href="#">Manage Cost</a></div>
       <div className="container-4   container"><a href="#">Company Growth Rate</a></div>
       <div className="container-5    container"><a href="#">Admin Page Setting</a></div>
     


      </div>
    
    
    
    
    
    </>

  )
}





export default Adminpage;