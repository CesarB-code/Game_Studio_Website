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
import NewsCarousel from '../wp-coponents/NewsCarousel/NewsCarousel.js';
import BoilderPlate from '../BoilerPlate.js/BoilerPlate.js';
import EventCards from '../wp-coponents/EventCards/EventCards.js';
import './Events.css';
function Events() {
    return (
        <Container fluid className="events-page">
            <Row >
                <Row>
                    <BoilderPlate className="top" fixed="top" />

                </Row>
                <Row className="events-title-row"><h1 id="NewsTitle" className="events-title">Events</h1></Row>


                <Row className="events-carousel-row">

                    <NewsCarousel />

                </Row>

                <Row className="align-items-center justify-content-center events-intro-row">
                    <Col className='col-10'>
                        <div className="events-intro-copy">
                            <h2 className="events-intro-title">Join the Cyclone Community</h2>
                            <p className="events-intro-paragraph">
                                Be part of something extraordinary. Cyclone Game Studio hosts exclusive events designed to bring together gamers, creators, artists, and enthusiasts. Whether you're interested in gaming tournaments, anime art showcases, cosplay competitions, or meeting industry streamers, we have an event for you.
                            </p>
                            <p className="events-intro-paragraph events-intro-paragraph-last">
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