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
            <BsCaretRight className='mt-1 me-2 text-secondary' style={{fontSize:'32px'}}/>
            <span className='description'>{props.text}</span>
        </li>
    )
}

export default Point;