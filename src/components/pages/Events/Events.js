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
import EventCards from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/EventCards/EventCards.js';
import '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/Events/Events.js';
function Events() {
    return (
        <Container fluid style={{ backgroundPosition: 'center', height: '100vh', overflowX: 'hidden', overflowY: 'scroll', backgroundImage: `url(${overlayImage})` }} >
            <Row >
                <Row>
                    <BoilderPlate className="top" fixed="top" />

                </Row>
                <Row style={{ marginTop: '100px' }} ><h1 id="NewsTitle" style={{
                    height: '100%',
                    color: 'white',
                    paddingTop: '20px',
                    textAlign: 'center',
                    fontSize: '52px',
                    marginLeft: '0px',
                    padding: '0px',
                    margin: '0px',
                    textShadow: '2px 2px 4px black',
                }} >Events </h1></Row>


                <Row style={{ marginTop: '60px', paddingLeft: '30px', paddingRight: '30px' }}>

                    <NewsCarousel />

                </Row>

                <Row className='align-items-center justify-content-center' style={{ backgroundColor: 'transparent', marginBottom: '40px', marginTop: '30px' }}>
                    <Col className='col-10'>
                        <div style={{ color: 'white', textAlign: 'center', padding: '30px' }}>
                            <h2 style={{ fontFamily: 'fantasy', fontSize: '32px', marginBottom: '20px', textShadow: '2px 2px 4px black' }}>Join the Cyclone Community</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px', textShadow: '2px 2px 4px black' }}>
                                Be part of something extraordinary. Cyclone Game Studio hosts exclusive events designed to bring together gamers, creators, artists, and enthusiasts. Whether you're interested in gaming tournaments, anime art showcases, cosplay competitions, or meeting industry streamers, we have an event for you.
                            </p>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', textShadow: '2px 2px 4px black' }}>
                                Network with like-minded individuals, discover cutting-edge gaming technology, and celebrate the culture you love. Explore our event listings below and sign up today to secure your spot. We look forward to seeing you at our next event!
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <EventCards />
                </Row>
            </Row>

        </Container >
    );
}
export default Events;