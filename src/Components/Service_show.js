
import { useState } from "react"
import "./service.css"
import { Link } from "react-router-dom"

 const Service_show = (props) => {

    const [value,setValue] = useState(props.value);
    const [rate, setRate]= useState(props.rate);
    const [del,setDel]= useState(props.del);
  return (
    <div className="box">
    <div className={props.value}></div>
     <h4 className="rate">Rs. {props.rate}  <del> {props.del}</del></h4>
     <button type="button"> <Link to="/food_order">Order now</Link></button>
    </div>
  )
}

export default Service_show;