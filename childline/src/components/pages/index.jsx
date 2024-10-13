//import IconBox from "../icon-box";
import {BsPlayCircle,BsPeople,BsController,BsPhone,BsTv,BsChatDots,BsChatLeftText,BsBoxes,BsArrowUp} from 'react-icons/bs'
import {PrimaryButton,PrimaryLinkButton} from '../buttons';
import IconBox from "../icon-box";
import HeroSection from "../hero-section";
import PostBox from '../post-box';
import ResourceCard from '../resource-card';
import Navigation from '../navigation';
import Footer from '../footer';
import hero_img from '../../sources/Nova/img/heroes/hero-bg.jpg'
const Index=(props)=>{
    return(
        <>
            <Navigation/>
            <HeroSection img={hero_img}>
                <h2 data-aos="fade-up" className="aos-init aos-animate">Child Online Protection</h2>
                <p>Helping make the internet a great and safe place for children and young people</p>

                <div className="d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <PrimaryButton text="Get Started" href="categories" />
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><BsPlayCircle className='me-1'/><span>Watch Video</span></a>
                </div>
            </HeroSection>
            <div>
                <h2 data-aos="fade-up" className="aos-init aos-animate d-flex p-2">
                    <BsPeople className='me-1'/>
                    Help and Advice
                </h2>
                
            </div>
            <div className="featured-services row p-2" id="categories">
                <IconBox icon={{component:BsController,className:'featured-services-icon'}} title="Teachers and Professionals" />
                <IconBox icon={{component:BsPhone,className:'featured-services-icon'}} title="Parents and Carers" />
                <IconBox icon={{component:BsTv,className:'featured-services-icon'}} title="4-11 year olds" />
                <IconBox icon={{component:BsChatDots,className:'featured-services-icon'}} title="11-18 year olds" />
            </div>
            <div>
                <h2 data-aos="fade-up" className="aos-init aos-animate d-flex p-2">
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
            <div className='d-flex p-3'>
                <PrimaryLinkButton text="view all posts" href="/posts" />
            </div>
            <div>
                <h2 data-aos="fade-up" className="aos-init aos-animate d-flex p-2">
                    <BsBoxes className='me-1'/>
                    Resources
                </h2>
                
            </div>
            <div className="row px-2 bg-light">
                <ResourceCard/>
                <ResourceCard/>
                <ResourceCard/>
                <ResourceCard/>
            </div>
            <div className='d-flex p-3'>
                <PrimaryLinkButton text="view all resources" href="/resources" />
            </div>
            <Footer/>
            <a href="#" class="scroll-top d-flex align-items-center justify-content-center active text-white"><BsArrowUp/></a>
            
            
            
        </>
    )
}

export default Index;