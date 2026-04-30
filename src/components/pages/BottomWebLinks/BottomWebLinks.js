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
import MyImage3 from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/sufyan-5NrbL6F68V0-unsplash.jpg'

function BottomWebLinks() {
    return (
        <Container className='bottomWebPage'  >
            <Row className='bg-grey '>
                <Col style={{ bottom: 100 }}>
                    <img src={MyImage3} style={{ height: 50, width: 50 }} alt="Background" />

                    <a href="#" style={{ color: 'white', fontFamily: 'fantasy', fontSize: 30, marginTop: 30 }}>Cyclone</a>

                </Col>

                <Col>
                    <Row>
                        <Col className='col-3 '>
                            <p style={{ color: 'white', fontSize: 15 }}>Social Media</p>
                        </Col>
                        <Col className='col-3 '>
                            <p style={{ color: 'white' }} >Company</p>
                        </Col>
                        <Col className='col-3 '>
                            <p style={{ color: 'white' }} >Store</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='col-3 '>
                            <a href='#' className='link' >Twitter</a>
                        </Col>
                        <Col className='col-3 '>
                            <a href='#' className='link' >Carrers</a>

                        </Col>
                        <Col className='col-3 '>
                            <a href='#' className='link' >Events</a>
                        </Col>
                    </Row>
                    <Row>

                        <Col className='col-3 '>
                            <a href='#' className='link' >Tiktok</a>
                        </Col>
                        <Col className='col-3 '>
                            <a href='#' className='link' >FAQ</a>

                        </Col>
                        <Col className='col-3 '>
                            <a href='#' className='link' >Youtube</a>
                        </Col>

                    </Row>


                    <Row>
                        <Col className='col-3 '>
                            <a href='#' className='link' >Instagram</a>
                        </Col>
                        <Col className='col-3 '>
                            <a href='#' className='link' >Location</a>

                        </Col>
                        <Col className='col-3 '>
                            <a href='#' className='link' >Games</a>

                        </Col>
                    </Row>

                    <Row>
                        <Col className='col-3 '>
                            <a href='#' className='link' >Discord</a>
                        </Col>
                        <Col className='col-3 '>
                            <a href='#' className='link' >About</a>

                        </Col>
                        <Col className='col-3 '>
                            <a href='#' className='link' >Merch</a>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}
export default BottomWebLinks;