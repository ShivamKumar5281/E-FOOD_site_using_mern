import { useState } from "react";
import "./restaurant_show.css"
export const Restaurant_show = (props) => {

    const [image,setImage] = useState(props.name)
  return (
    <div className={image}><div className="information">Delhi Restaurants</div></div>
  )
}

export default Restaurant_show;