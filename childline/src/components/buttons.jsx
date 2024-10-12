import { Link } from "react-router-dom"
const PrimaryLinkButton=(props)=>{
    return(
        <Link to={props.href} class="btn-get-started">{props.text}</Link>
    )
}

const PrimaryButton=(props)=>{
    return(
        <a href={`#${props.href}`} class="btn-get-started">{props.text}</a>
    )
}

export {PrimaryButton, PrimaryLinkButton};