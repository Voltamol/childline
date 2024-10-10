import logo from '../childline-logo.png'
import '../sources/Nova/js/main.js';
import '../sources/Nova/css/main.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const DropDownLink=(props)=>{
  const link=props.link;
  return(
    <li className="dropdown"><Link to={link.to}><span>{props.title}</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
      <ul>
        <li><Link to={link.to}>{link.text}</Link></li>
        {/* <li className="dropdown"><Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
          <ul>
            <li><Link to="#">Deep Dropdown 1</Link></li>
            <li><Link to="#">Deep Dropdown 2</Link></li>
            <li><Link to="#">Deep Dropdown 3</Link></li>
            <li><Link to="#">Deep Dropdown 4</Link></li>
            <li><Link to="#">Deep Dropdown 5</Link></li>
          </ul>
        </li> */}
        {
          link.dropdowns.map((sublink,i)=>(
            <li key={i}><Link to={sublink.to}>{sublink.text}</Link></li>
          ))
        }
      </ul>
    </li>
  )
}


const sampleDropdown ={
    "to": "/parental-controls",
    "text": "Parental Controls",
    "dropdowns": [
      {
        "to": "/parental-controls/setup",
        "text": "Setup Instructions"
      },
      {
        "to": "/parental-controls/benefits",
        "text": "Benefits"
      },
      {
        "to": "/parental-controls/tools",
        "text": "Recommended Tools"
      },
      {
        "to": "/parental-controls/misconceptions",
        "text": "Common Misconceptions"
      }
    ]
}

const Navigation=(props)=>{
  const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 100);
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
        <header id="header" className={`header ${isSticky ? 'sticked' : ''} d-flex align-items-center fixed-top`}>
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            
            <Link to='/' className="logo d-flex align-items-center">
              <img src={logo} style={{filter:'hue-rotate(120deg)'}}/>
              
              <h1 className="d-flex align-items-center">Childline</h1>
            </Link>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

            <nav id="navbar" className="navbar">
              <ul>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/login">Contribute to  our Blog</Link></li>
                <DropDownLink link={sampleDropdown} title="Teachers & Professionals" />
                <DropDownLink link={sampleDropdown} title="Parents & Carers" />
                <DropDownLink link={sampleDropdown} title="Young People" />
              </ul>
            </nav>

          </div>
        </header>
    )
}

export default Navigation;