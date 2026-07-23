import {
    Row, Col,

    Container
} from 'react-bootstrap';

import MyImage3 from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/sufyan-5NrbL6F68V0-unsplash.jpg';
import { RiTiktokLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { RxDiscordLogo } from "react-icons/rx";
import './BottomWebPage.css';


function BottomWebLinks() {
    return (

        <Row className='bottomWebPage'>
            <Col id='label' xs={2} >

            </Col>


            <Col id='info' xs={10} >
                <Row className='row-section-header' >
                    <Col className='col-centered' >
                        <p className='section-title'>Social Media</p>
                    </Col>
                </Row>
                <Row className='row-centered'>

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
                <Row className='row-section-header'>
                    <Col xs={{ span: 4, offset: 4 }} className='col-text-center' >
                        <p className='section-title' >Company</p>
                    </Col>
                </Row>

                <Row className='row-centered'>


                    <Col xs={4} className='col-text-center' >
                        <a href='#' className='link' >Carrers</a>

                    </Col>
                    <Col xs={4} className='col-text-center' >
                        <a href='#' className='link' >Events</a>
                    </Col>

                    <Col xs={4} className='col-text-center'>
                        <a href='#' className='link' >FAQ</a>

                    </Col>
                </Row>
                <Row className='row-section-header'>


                    <Col xs={{ span: 4, offset: 4 }} className='col-text-center' >
                        <p className='section-title' >Store</p>
                    </Col>


                </Row>


                <Row className='row-centered'>

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



        </Row >



    );
}
export default BottomWebLinks;