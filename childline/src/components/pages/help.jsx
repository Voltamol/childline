import React, { useEffect, useState } from 'react';
import GetHelp from '../get-help';
import HeroSection from '../hero-section';
import { BsArrowUp } from 'react-icons/bs';
import Navigation from '../navigation';
import hero_img from '../../sources/Nova/img/heroes/hero-bg2.jpg';
import FurtherInfo from '../accordion';
import Point from '../points';
import { fetchData, endpoints } from '../../api/endpoints';
import Cookies from 'js-cookie';

const HelpLayout = (props) => {
    return (
        <div className="row">
            <div className="col-lg-9">
                {props.children[0]}
            </div>
            <div className="col-lg-3">
                {props.children[1]}
            </div>
        </div>
    );
};

const BoldPoints = (props) => {
    return (
        <>
            {props.points.map((point, i) => (
                <p key={i}>
                    <strong>{point.title}</strong>: {point.body}
                </p>
            ))}
        </>
    );
};

const HelpMain = (props) => {
    return (
        <HelpLayout>
            <div className='pe-3 text-start ps-2'>
                {props.paragraphs.map((para, index) => (
                    <div key={index}>
                        <h2>{para.title || ''}</h2> {/* Adjust based on your data */}
                        <p className='text-start pe-5 lead'>{para.body}</p>
                    </div>
                ))}

                <BoldPoints points={props.bold_points} />

                {props.further_info.length > 0 && (
                    <div className='mb-3'>
                        <FurtherInfo items={props.further_info} />
                    </div>
                )}

                <ul className="my-1 p-3">
                    {props.bulleted_points.map((point, i) => (
                        <Point text={point.body} key={i} />
                    ))}
                </ul>
            </div>
            <GetHelp tags={props.tags} />
        </HelpLayout>
    );
};

const Help = (props) => {
    const [bold_points, setBoldPoints] = useState([]);
    const [bulleted_points, setBulletedPoints] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);
    const [further_info, setFurtherInfo] = useState([]);
    const [categoryitems, setCategoryItems] = useState([]);
    const [tags, setTags] = useState([]);
    const lineCategoryName = Cookies.get('lineCategoryName'); 

    useEffect(() => {
        const getCategoryItems = async () => {
            if (lineCategoryName) {
                const endpoint = `${endpoints.categoryitems}?line_category_name=${encodeURIComponent(lineCategoryName)}`;
                const data = await fetchData(endpoint);
                if (data) { // Ensure data is not null or undefined
                    console.log(data);
                    const firstItem = data[0]; // Get the first item to display
                    setCategoryItems(firstItem);
                    console.log(`firstItem: ${firstItem}`)
                    setBoldPoints(firstItem.bold_points || []);
                    setBulletedPoints(firstItem.bullets || []);
                    setParagraphs(firstItem.paragraphs || []);
                    setFurtherInfo(firstItem.further_info || []);
                    setTags(firstItem.tags || []);
                }
            }
        };

        getCategoryItems();
    }, [lineCategoryName]); // Add lineCategoryName as a dependency
    return (
        <>
            <Navigation />
            <HeroSection img={hero_img}>
                <h6 className='text-light'>Help and advice</h6>
                <h2 data-aos="fade-up" className="aos-init aos-animate">{categoryitems.name}</h2>
                <p className='text-light'>{categoryitems.description}</p>
            </HeroSection>

            <HelpMain
                bold_points={bold_points}
                bulleted_points={bulleted_points}
                paragraphs={paragraphs}
                further_info={further_info}
                tags={tags}
            />
            <a href="#" className="scroll-top d-flex align-items-center justify-content-center active text-white"><BsArrowUp /></a>
        </>
    );
}

export default Help;