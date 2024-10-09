
// <div>
//                 <FilterContainer>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                 </FilterContainer>
//                 <FilterContainer>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                     <Filter title="Social Media"/>
//                 </FilterContainer>
//             </div>

const Filter=(props)=>{
    return(
        <li>
            <input type="checkbox" className="me-3"/>
            {props.title}
        </li>
    )
}

const FilterContainer=(props)=>{
    return(
        <ul className="container border border-dark py-1 text-start ps-2" style={{listStyleType:'none'}}>
            {props.children}
        </ul>
    )
}

export {Filter,FilterContainer}