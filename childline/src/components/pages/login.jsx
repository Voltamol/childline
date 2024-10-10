import '../../sign-in.css';
import logo from '../../childline-logo.png'
import { Link } from 'react-router-dom';
const FormTitle=(props)=>{
    return(
        <h1 className="h3 mb-3 fw-normal text-center">{props.title}</h1>
    )
}
const RememberMe=(props)=>{
    return(
        <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Remember me
            </label>
        </div>
    )
}
const NamePassword=(props)=>{
    return(
        <>
            {props.children}
            <div className="form-floating">
                <input type="text" className={props.newHere?"form-control rounded-0":"form-control rounded-bottom-0"} id="floatingInput" placeholder="name/alias"/>
                <label for="floatingInput">Username</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>
        </>
    )
}

const LoginForm=(props) =>{
    return(
        <form>
            <img className="mb-4 img-fluid" src={logo} alt="" />
            {props.children[0]}

            {
                props.newHere?<NamePassword newHere={true}>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email</label>
                </div>
            </NamePassword>:<NamePassword/>
            }

            <RememberMe/>
            {props.children[1]}
            {props.children[2]}
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
    )
}

const Login=(props)=>{
    return(
        <main className="form-signin w-100 m-auto mt-5">
            <LoginForm>
                <FormTitle title="Please Login" />
                <button className="btn btn-dark w-100 py-2" type="submit">login</button>
                <Link to='/signup' className='text-dark'>new here? Signup</Link>
            </LoginForm>
        </main>
    )
}

const Signup=(props)=>{
    return(
        <main className="form-signin w-100 m-auto mt-5">
            <LoginForm newHere={true}>
                <FormTitle title="Please Sign Up" />
                <button className="btn btn-dark w-100 py-2" type="submit">signup</button>
                <Link to='/login' className='text-dark'>already a member? Login</Link>
            </LoginForm>
        </main>
    )
}

export  {Login,Signup};