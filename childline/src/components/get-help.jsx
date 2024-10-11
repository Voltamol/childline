const GetHelp=(props)=>{
    return(
        <div className="container p-2" style={{width:'300px'}}>
            <div className="rounded-2 text-white py-2 mb-2 ps-2" style={{backgroundColor:'#1b2f45'}}>
                Get Help
            </div>
            
            <ul style={{listStyleType:'none',backgroundColor:'#1b2f45f3'}} className="py-2 text-white text-start rounded-2">
            <h5>In this Page</h5>
                <li>what is critical thinking?</li>
                <li>what are the issues?</li>
                <li>top tips</li>
                <li>conversation starters</li>
            </ul>
        </div>
    )

}


{/* <div className='my-2'>
                <GetHelp/>
            </div> */}
export default GetHelp;