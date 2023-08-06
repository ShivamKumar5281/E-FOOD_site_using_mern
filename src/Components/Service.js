
import "./service.css"
import Service_show from "./Service_show";

const Service = (props)=>{

    return (
         <>
         <h1 className="Our-Services">Our Services </h1>
         <div className="service">
            <Service_show  value="food" rate="200"  del="280"/ >
            <Service_show  value="food1" rate="300"  del="380"/ >
            <Service_show  value="foods" rate="450"  del="530"/ >
            <Service_show  value="fruit" rate="780"  del="830"/ >
            <Service_show  value="food4" rate="1050"  del="2030"/ >
            <Service_show  value="paneer" rate="400"  del="530"/ >
         </div>
        </>
    )
}

export default Service;