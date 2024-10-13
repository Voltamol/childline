const GetHelp=(props)=>{
    return(
        <div className="container p-2" style={{width:'300px'}}>
            <div className="rounded-2 text-white py-2 mb-2 ps-2" style={{backgroundColor:'#1b2f45'}}>
                Get Help
            </div>
            
            <ul style={{listStyleType:'none',backgroundColor:'#1b2f45f3'}} className="py-2 text-white text-start rounded-2">
            <h5>In this Page</h5>
                {props.tags.map((tag, i) =>(
                    <li key={i}>{tag.name}</li>
                ))}
                
            </ul>
        </div>
    )

}



export default GetHelp;