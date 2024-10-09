import {BsCaretRight} from 'react-icons/bs';
import '../sources/Bizland/css/style.css'
import {Link} from 'react-router-dom'
const HelpLink=(props)=>{
    return(
        <li className='d-flex '>
            <BsCaretRight className='mt-1 me-2 description'/>
            <Link className='description' href={props.to}>{props.text}</Link>
        </li>
    )
}
const IconBox=(props)=>{
    return(
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">{props.icon}</div>
                <h4 className="title"><a href="">{props.title}</a></h4>
                <ul style={{listStyleType:'circle',width:'800px'}}>
                    
                    <HelpLink to="#" text="Social Media"/>
                    <HelpLink to="#" text="Online Bullying"/>
                    <HelpLink to="#" text="Reliability Online"/>
                    <HelpLink to="#" text="Parental Controls"/>
                    <HelpLink to="#" text="Sexting"/>
                    
                </ul>
            </div>
        </div>
    )
}

export default IconBox;
