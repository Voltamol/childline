import { BsTwitter,BsFacebook,BsYoutube,BsLinkedin } from "react-icons/bs";
import logo from '../childline-logo.png'
const Footer=(props)=>{
    return(
        <footer id="footer" className="footer mt-2">

    <div className="footer-content">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src={logo} style={{filter:'hue-rotate(120deg)'}}/>
              <span>Childline</span>
            </a>
            <br/>
            <br/>
            <div className="social-links d-flex  mt-3">
              <a href="#" className="twitter"><BsTwitter/></a>
              <a href="#" className="facebook"><BsFacebook/></a>
              <a href="#" className="instagram"><BsLinkedin/></a>
              <a href="#" className="linkedin"><BsYoutube/></a>
            </div>
          </div>

          <div className="col-lg-6 text-start">
            <br/>
            <br/>
            <h2>Don't miss out</h2>
            <p>receive updates on the latest resources,news and research from Childline</p>
            <div className="d-flex">
            <input type="text" className="form-control me-1" placeholder="Email"/>
            <button className="btn btn-outline-dark rounded-1">Signup</button>
            </div>
          </div>

        </div>
      </div>
    </div>

    
  </footer>
    )
}

export default Footer;