import {
    Row, Col,

    Container
} from 'react-bootstrap';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate';
import BottomWebLinks from '../BottomWebLinks/BottomWebLinks.js';
function Store() {
    return (
        <Container fluid className='Container full-page'>
            <Row style={{ marginBottom: 30 }}>
                <BoilerPlate />

            </Row>


            <Row className='BottomWebLinks' >
                <BottomWebLinks />
            </Row>

        </Container >

    );
}
export default Store;