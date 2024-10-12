import PostBox from '../post-box';
import Navigation from '../navigation';
const Posts=(props)=>{
    return(
        <>
            <Navigation/>
            <div className="position-fixed top-0 container-fluid bg-dark" style={{height:'105px'}}></div>
            <div className="row px-2 pb-3" style={{marginTop:'115px'}}>
                <PostBox/>
                <PostBox/>
                <PostBox/>
                <PostBox/>

                <PostBox/>
                <PostBox/>
                <PostBox/>
                <PostBox/>
            </div>
        </>
    )
}

export default Posts;