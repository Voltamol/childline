import { SinglePostContainer } from "../single-post";
import Navigation from '../navigation';

import Footer from "../footer";
const ForumDetailsPage=(props)=>{
    return(<>
        <Navigation/>
        <div className="position-fixed top-0 container-fluid bg-dark z-3" style={{height:'105px'}}></div>
        <SinglePostContainer/>
        <Footer/>
    </>)
}

export default ForumDetailsPage;