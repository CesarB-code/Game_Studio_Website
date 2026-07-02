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

import MyImage3 from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/sufyan-5NrbL6F68V0-unsplash.jpg';
import './BottomWebPage.css';
import { RiTiktokLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { RxDiscordLogo } from "react-icons/rx";

function BottomWebLinks() {
    return (
        <Container className=' bottomWebPage' >
            <Row>
                <Col xs={2} id='label' style={{ textAlign: 'left' }} >
                </Col>


                <Col xs={10}>
                    <Row >
                        <Col style={{ textAlign: 'center', justifyContent: 'center' }} >
                            <p style={{ color: 'white', fontSize: 22 }}>Social Media</p>
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>

                        <Col xs={2}  >
                            <a href='#' className='link' ><FaXTwitter /></a>
                        </Col>
                        <Col xs={2}  >
                            <a href='#' className='link' ><RiTiktokLine />
                            </a>
                        </Col>
                        <Col xs={2} >
                            <a href='#' className='link' ><CiYoutube />
                            </a>
                        </Col>
                        <Col xs={2} >
                            <a href='#' className='link' ><FaInstagram />
                            </a>
                        </Col>
                        <Col xs={2} >
                            <a href='#' className='link' ><RxDiscordLogo />
                            </a>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={{ span: 4, offset: 4 }} style={{ textAlign: 'center' }} >
                            <p style={{ color: 'white', fontSize: 22 }} >Company</p>
                        </Col>
                    </Row>

                    <Row style={{ justifyContent: 'center' }}>


                        <Col xs={4}  >
                            <a href='#' className='link' >Carrers</a>

                        </Col>
                        <Col xs={4} >
                            <a href='#' className='link' >Events</a>
                        </Col>

                        <Col xs={4}  >
                            <a href='#' className='link' >FAQ</a>

                        </Col>
                    </Row>
                    <Row>


                        <Col xs={{ span: 4, offset: 4 }} style={{ textAlign: 'center' }} >
                            <p style={{ color: 'white', fontSize: 22 }} >Store</p>
                        </Col>


                    </Row>


                    <Row style={{ justifyContent: 'center' }}>

                        <Col xs={2}>
                            <a href='#' className='link' >Location</a>

                        </Col>
                        <Col xs={2}>
                            <a href='#' className='link' >Games</a>

                        </Col>
                        <Col xs={2}>
                            <a href='#' className='link' >About</a>

                        </Col>
                        <Col xs={2}>
                            <a href='#' className='link' >Merch</a>
                        </Col>
                    </Row>
                </Col>



            </Row>


        </Container>
    );
}
export default BottomWebLinks;