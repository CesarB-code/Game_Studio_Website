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
import NewsCarousel from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/NewsCarousel/NewsCarousel.js';
import BoilderPlate from '../BoilerPlate.js/BoilerPlate.js';
import overlayImage from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/takashi-miyazaki-64ajtpEzlYc-unsplash.jpg';
import '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/Events/Events.js';
function Events() {
    return (
        <Container fluid style={{ backgroundPosition: 'center', height: '100vh', overflowX: 'hidden', overflowY: 'scroll', backgroundImage: `url(${overlayImage})` }} >
            <Row >
                <Row>
                    <BoilderPlate className="top" fixed="top" />

                </Row>
                <Row style={{ marginTop: '60px' }} ><h1 id="NewsTitle" style={{
                    height: '100%',
                    color: 'white',
                    paddingTop: '20px',
                    textAlign: 'center',
                    fontSize: '52px',
                    marginLeft: '0px',
                    padding: '0px',
                    margin: '0px',
                }} >Recent News </h1></Row>

                <Row style={{ marginTop: '60px', marginLeft: '10px', marginRight: '30px' }}>

                    <NewsCarousel />

                </Row>
            </Row>

        </Container >
    );
}
export default Events;