import { BsTwitter,BsFacebook,BsYoutube,BsLinkedin } from "react-icons/bs";
const Footer=(props)=>{
    return(
        <footer id="footer" class="footer mt-2">

    <div class="footer-content">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <a href="index.html" class="logo d-flex align-items-center">
              <span>Childline</span>
            </a>
            <br/>
            <br/>
            <div class="social-links d-flex  mt-3">
              <a href="#" class="twitter"><BsTwitter/></a>
              <a href="#" class="facebook"><BsFacebook/></a>
              <a href="#" class="instagram"><BsLinkedin/></a>
              <a href="#" class="linkedin"><BsYoutube/></a>
            </div>
          </div>

          <div class="col-lg-6 text-start">
            <br/>
            <br/>
            <h2>Don't miss out</h2>
            <p>receive updates on the latest resources,news and research from Childline</p>
            <div class="d-flex">
            <input type="text" class="form-control me-1" placeholder="Email"/>
            <button class="btn btn-outline-dark rounded-1">Signup</button>
            </div>
          </div>

        </div>
      </div>
    </div>

    
  </footer>
    )
}

export default Footer;