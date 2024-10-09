//import IconBox from "../icon-box";
import {BsPlayCircle,BsPeople,BsController,BsPhone,BsTv,BsChatDots,BsChatLeftText} from 'react-icons/bs'
import PrimaryButton from '../buttons';
import IconBox from "../icon-box";
import HeroSection from "../hero-section";
import PostBox from '../post-box';
import Paragraph from '../paragraph';
import { Filter,FilterContainer } from '../resource-filters';
import Navigation from '../navigation';
import Footer from '../footer';
const Index=(props)=>{
    return(
        <>
            <Navigation/>
            <HeroSection>
                <h2 data-aos="fade-up" class="aos-init aos-animate">Child Online Protection</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cum recusandae eum laboriosam voluptatem repudiandae odio, vel exercitationem officiis provident minima. </p>

                <div class="d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <PrimaryButton text="Get Started"/>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><BsPlayCircle className='me-1'/><span>Watch Video</span></a>
                </div>
            </HeroSection>
            <div>
                <h2 data-aos="fade-up" class="aos-init aos-animate d-flex p-2">
                    <BsPeople className='me-1'/>
                    Help and Advice
                </h2>
                
            </div>
            <div className="featured-services row p-2">
                <IconBox icon={<BsController className='featured-services-icon' />} title="Teachers and Professionals" />
                <IconBox icon={<BsPhone className='featured-services-icon' />} title="Parents and Carers" />
                <IconBox icon={<BsTv className='featured-services-icon' />} title="4-11 year olds" />
                <IconBox icon={<BsChatDots className='featured-services-icon' />} title="11-18 year olds" />
            </div>
            <div>
                <h2 data-aos="fade-up" class="aos-init aos-animate d-flex p-2">
                    <BsChatLeftText className='me-1'/>
                    Blog
                </h2>
                
            </div>
            <div className="row px-2">
                <PostBox/>
                <PostBox/>
                <PostBox/>
                <PostBox/>
            </div>
            <Footer/>
            
            
            
            
        </>
    )
}

export default Index;