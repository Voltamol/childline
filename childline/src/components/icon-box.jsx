import {BsCaretRight} from 'react-icons/bs';
import '../sources/Bizland/css/style.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const HelpLink = (props) => {
    const handleClick = () => {
        // Set the cookie with the line category name
        Cookies.set('lineCategoryName', props.text);
    };

    return (
        <li className='d-flex'>
            <BsCaretRight className='mt-1 me-2 description' />
            <Link className='description' to={props.to} onClick={handleClick}>
                {props.text}
            </Link>
        </li>
    );
};

const IconBox=(props)=>{
    return(
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">{props.icon}</div>
                <h4 className="title"><a href="">{props.title}</a></h4>
                <ul style={{listStyleType:'circle',width:'800px'}}>
                    
                    <HelpLink to="/help" text="Social media"/>
                    <HelpLink to="/help" text="Online Bullying"/>
                    <HelpLink to="/help" text="Reliability Online"/>
                    <HelpLink to="/help" text="Parental Controls"/>
                    <HelpLink to="/help" text="Sexting"/>
                    
                </ul>
            </div>
        </div>
    )
}

export default IconBox;
