import {
    Row, Col,
    Card,

    Container
} from 'react-bootstrap';
import { GoPencil } from "react-icons/go";
import { useEffect, useRef, useState } from 'react';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate';
import ProfileImage from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/istockphoto-828763406-1024x1024.jpg'
import Background from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/vista-wei-OiERUvVrioU-unsplash.jpg';
import './Profile.css'
import BottomWebLinks from '../BottomWebLinks/BottomWebLinks.js';
import { WiDayStormShowers } from 'react-icons/wi';
function Profile() {

    let element = useRef(null);
    let rowElement = useRef(null);

    const addMargin = () => {
        let currentMargin = parseFloat(getComputedStyle(element.current).marginLeft);
        const rowWidth = parseFloat(getComputedStyle(rowElement.current).width);
        const middleOfRow = rowWidth / 2;
        const remainderRow = middleOfRow - currentMargin

        element.current.style.marginLeft = `${currentMargin + remainderRow - 220}px`;
    };
    window.addEventListener('load', addMargin);
    window.addEventListener('resize', addMargin);

    return (
        <Container className='Profile-container' fluid style={{ overflowX: 'hidden', overflowY: 'scroll' }}>

            <BoilerPlate />



            <Row  >
                <Row ref={rowElement} style={{ marginTop: '70px' }} >
                    <Col ref={element} xs={{ span: 2, offset: 5 }} >
                        <img src={ProfileImage} style={{ border: '2px solid #F2a3a8' }} alt="Profile" className='ProfileImg' />
                    </Col>
                </Row>

                <Row >
                    <Col xs={{ span: 4, order: 'first', height: '100%' }} >

                        <Row >
                            <Col className="col-8 infoRightFormat">
                                <Card id="cardR">
                                    <p className="Text">UserName: Fenrir
                                    </p>
                                </Card>
                            </Col>
                            <Col className="col-2 infoLeftFormat" >
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-8'>
                                <Card id="cardR">
                                    <p className="Text">Name: John Doe</p>
                                </Card>
                            </Col>

                            <Col className="col-2 infoLeftFormat">
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>

                        </Row>
                        <Row>
                            <Col className='col-8' >
                                <Card id="cardR">
                                    <p className="Text">Name: John Doe</p>
                                </Card>
                            </Col>

                            <Col className="col-2 infoLeftFormat">
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>

                        </Row>
                        <Row>
                            <Col className='col-8'>
                                <Card id="cardR">
                                    <p className="Text">Name: John Doe</p>
                                </Card>
                            </Col>
                            <Col className="col-2 infoLeftFormat">
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>

                        </Row>
                        <Row>
                            <Col className='col-8'>
                                <Card id="cardR">
                                    <p className="Text">Name: John Doe</p>
                                </Card>
                            </Col>
                            <Col className="col-2 infoLeftFormat">
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>

                        </Row>


                    </Col>

                    <Col xs={{ span: 4, offset: 3, order: "last", height: '100%' }}>

                        <Row >
                            <Col className='col-8'>
                                <Card id="cardR">
                                    <p className="Text">Email: john.doe@example.com</p>
                                </Card>
                            </Col>
                            <Col className="col-2 infoLeftFormat">
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>

                        </Row>
                        <Row>
                            <Col className='col-8'>
                                <Card id="cardR">
                                    <p className="Text">Billing Address : 777 Luca Street</p>
                                </Card>
                            </Col>
                            <Col className="col-2 infoLeftFormat">
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>

                        </Row>
                        <Row>
                            <Col className='col-8'>
                                <Card id="cardR">
                                    <p className="Text">Shipping Address: 777 Luca Street</p>
                                </Card>

                            </Col>
                            <Col className="col-2 infoLeftFormat">
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>

                        </Row>
                        <Row>
                            <Col className='col-8'>
                                <Card id="cardR">
                                    <p className="Text">Payment Method: Credit Card</p>
                                </Card>
                            </Col>
                            <Col className="col-2 infoLeftFormat">
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>

                        </Row>
                        <Row>
                            <Col className='col-8'>
                                <Card id="cardR">
                                    <p className="Text">Name: John Doe</p>
                                </Card>

                            </Col>
                            <Col className="col-2 infoLeftFormat">
                                <p className="Text"> <GoPencil id='pencil' /></p>
                            </Col>
                        </Row>

                    </Col>



                </Row>
            </Row>






        </Container >

    );
}
export default Profile;