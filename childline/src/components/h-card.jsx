import blog2 from '../sources/Nova/img/blog/blog-2.jpg';

{/* <div className='my-2 px-2'>
    <HCard/>
    <HCard/>
    <HCard/>
    <HCard/>
</div> */}

const HCard=(props)=>{
    return(
        <div className='row mb-1'>
            <div className='col-lg-2 col-md-2'>
                <img src={blog2} class="img-fluid h-100"  alt=""/>
            </div>
            <div className='col-lg-10 col-md-10'>
                <h5 className='d-flex'>Teaching About Healthy Online Relationships</h5>
                <p className='lead text-start' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat consequatur quam eius, dolorem, iure, omnis maxime dolore provident nostrum repellat ipsam sed eum in beatae numquam esse maiores.
                    Distinctio, voluptates!
                </p>
            </div>
        </div>
    )
}

export default HCard;