import "./page.css"

const Page = (props)=>{


    return(
        <>
        <div className="L">  
        <h4 className="L-t">Get-Food Online Shop</h4>


        </div>
        <div className="login">

           <button  className="l" id="d1"><a href="/Login"> Login</a></button>
           <button   className="l" id="d2"> <a href="/Submit"> Create Account</a></button>
        </div>
        <div className="admin_login">
            <button  id="d5" > <a href="/login_admin">Admin Login</a></button>
        </div>
        <div className="location">
            <input type="text"  placeholder="Search nearest Restaurants"     />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        </>
        

    )
}

export default Page;