import {
    Row, Col,
    Carousel,
    CarouselItem,
    CarouselCaption,
    Nav,
    Navbar,

    NavDropdown,
    Container
} from 'react-bootstrap';
import BoilderPlate from '../BoilerPlate.js/BoilerPlate.js';
function TeamMembers() {
    return (
        <Container fluid>
            <Row >
                <BoilderPlate className="top" fixed="top" />
            </Row>

        </Container>
    );
}
export default TeamMembers;