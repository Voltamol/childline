import {BsCaretRight} from 'react-icons/bs';

{/* <ul className="my-1 p-3">
    <Point text="what do you enjoy looking at and learning about online"/>
    <Point text="what do you enjoy looking at and learning about online"/>
    <Point text="what do you enjoy looking at and learning about online"/>
    <Point text="what do you enjoy looking at and learning about online"/>
    <Point text="what do you enjoy looking at and learning about online"/>
    <Point text="what do you enjoy looking at and learning about online"/>
    <Point text="what do you enjoy looking at and learning about online"/>
</ul> */}

const Point=(props)=>{
    return(
        <li className='d-flex align-items-center my-1'>
            <BsCaretRight className='mb-2  me-2 text-secondary' style={{fontSize:'32px'}}/>
            <p className='description lead'>{props.text}</p>
        </li>
    )
}

export default Point;