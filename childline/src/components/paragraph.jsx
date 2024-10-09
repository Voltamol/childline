const sampleContent=`
Furthermore, with the introduction of Node.js, 
JavaScript has transcended its traditional role as a client-side language, 
enabling developers to use it on the server-side as well. 
This unification of development with a single language across the stack has led to increased efficiency and reduced 
complexity in building full-fledged applications.`
{/* <div className='ps-2'>
                <
                    Paragraph 
                    title="What is critical thinking"
                    content={sampleContent}
                />
            </div> */}
const Paragraph=(props)=>{
    return(
        <>
            <h2 data-aos="fade-up" class="aos-init aos-animate d-flex">
                    
                    {props.title}
                </h2>
                <br/>
                <p className="text-start">
                    {props.content}
                </p>
        </>
    )
}

export default Paragraph;