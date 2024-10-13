import {BsCaretRight} from 'react-icons/bs';
import '../sources/Bizland/css/style.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { fetchData, endpoints } from '../api/endpoints';

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
    const title=props.title;
    const [categories,setCategories]=useState([]);
    const { component: IconComponent, className }=props.icon;
    useEffect(()=>{
        const getCategoryItems=async()=>{
            const endpoint = `${endpoints.categoryitems}?service_line_name=${encodeURIComponent(title)}`;
            const data = await fetchData(endpoint);
            if(data){
                setCategories(data)
            }
        }
        getCategoryItems();
    },[title])
    return(
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">{React.createElement(IconComponent, { className })}</div>
                <h4 className="title"><a href="">{title}</a></h4>
                <ul style={{listStyleType:'circle',width:'800px'}}>
                    
                    {/* <HelpLink to="/help" text="Social media"/> */}
                    
                    {categories.map((category, index) =>(
                        <HelpLink to="/help" text={category.name} key={index}/>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}

export default IconBox;
