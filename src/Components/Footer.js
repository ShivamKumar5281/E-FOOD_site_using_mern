 import "./footer.css"
 

const Footer = () => {
    const design = {
        color:'white'
    }
  return (
    <>
     <div className="large-div">
    <div className="footer">
        <div   className='footerchild'id="footer-child-1"  ><i class="fa-brands fa-android fa-2xl " ></i></div>
        <div className="footerchild" id="footer-child-2"><i class="fa-brands fa-google-play fa-2xl"></i></div>
        <div className="footerchild" id="footer-child-3"><i class="fa-brands fa-twitter fa-2xl"></i></div>
        <div className="footerchild" id="footer-child-4"><i class="fa-brands fa-facebook fa-2xl"></i></div>


    </div>
    <h4 className="f-text">All Copyrights &copy; are reserved</h4>
    <div className="footer-text">
        <h4>Designed By Engineer Shivam Kumar</h4>
    </div>
    </div>
    </>
  )
}


export default Footer;

