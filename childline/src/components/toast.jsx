import Toast from '../../node_modules/react-bootstrap/Toast';
import ToastContainer from '../../node_modules/react-bootstrap/ToastContainer';
import CloseButton from 'react-bootstrap/CloseButton';

function CloseToast(props) {
  return <CloseButton className='position-absolute end-0 me-1' onClick={props.callback} />;
}

const ToastBody=(props)=>{
   return(
    <Toast.Body>
        {props.text}
        {
            props.isBasic?<CloseToast callback={props.callback}/>:<></>
        }
        </Toast.Body>
   )
}

const ToastHeader=(props)=>{
    return(
        <Toast.Header closeButton={false}>
            <strong className="me-auto">{props.headingTitle}</strong>
            <small>{props.smallText}</small>
        </Toast.Header>
    )
}
const ToastWithHeader=(props)=>{
  return (
    <Toast show={props.show} onClose={props.closeCallback} delay={3000} autohide>
      <ToastHeader smallText="11 mins ago" headingTitle="Policies" />
      <ToastBody isBasic={false} text="api feedback for GRC"/>
    </Toast>
  );
}

const BasicToast=(props)=>{
    return (
        <Toast show={props.show} className='position-relative' onClose={props.closeCallback} delay={3000} autohide>
          <ToastBody isBasic={true} text={props.children} callback={props.closeCallback} />
        </Toast>
      );
}

const ToastPlacement=(props)=>{
  return(
        <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 1 }}>
          {props.children}
        </ToastContainer>
  )
}

export {BasicToast,ToastWithHeader,ToastPlacement};