import {
    Row, Col,
    Carousel,
    CarouselItem,
    CarouselCaption,
    Nav,
    Navbar,
    Image,
    NavDropdown,
    Container
} from 'react-bootstrap';

import MyImage3 from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/sufyan-5NrbL6F68V0-unsplash.jpg'
import BottomWebLinks from '../BottomWebLinks/BottomWebLinks.js';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate.js';
import './About.css'
function About() {
    return (
        <Row style={{ width: "100%", height: "100%", backgroundColor: "black", margin: "0px", overflowX: 'hidden' }}>
            <Row style={{ width: "100%" }} >
                <BoilerPlate />

            </Row>

            <Row className='justify-content-center' style={{ width: '100vw', height: '60%', color: 'white', fontFamily: 'fantasy', paddingTop: "60px", paddingBottom: '10px' }}>
                <Row >
                    <Col>
                        <h3>About the Company</h3>

                        <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                    <Col >
                        <h3>Company Name</h3>

                        <p id='text'>Cyclone</p>
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <h3>Company History</h3>
                        <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                    <Col >
                        <h3>Company Values</h3>
                        <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <h3>Company Description</h3>
                        <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                    <Col>
                        <h3>Company Mission</h3>
                        <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                </Row>


            </Row>

            <Row style={{ width: '100%', height: '100%', margin: '0px', paddingTop: '200px' }}>
                <BottomWebLinks />
            </Row>

        </Row >
    );
}
export default About;