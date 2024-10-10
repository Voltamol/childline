import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
function FurtherInfo(props) {
  return (
    <Accordion defaultActiveKey="" className='me-1'>
      {
        props.items.map((item,index)=>{
            return (<Accordion.Item key={index} eventKey={`${index}`}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>
                    <Stack gap={2}>
                        {/* <h3>Incident summary</h3> */}
                        {item.body}
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>)
        })
      }
      
    </Accordion>
  );
}

export default FurtherInfo;