import {
    Row, Col,
    Card,

    Container
} from 'react-bootstrap';
import { useState } from 'react';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate';
import ProfileImage from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/istockphoto-828763406-1024x1024.jpg'
import Background from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/vista-wei-OiERUvVrioU-unsplash.jpg';
import './Profile.css'
import BottomWebLinks from '../BottomWebLinks/BottomWebLinks.js';
function Profile() {
    const element = document.querySelector(".ProfileImg");

    const currentMargin =
        parseFloat(getComputedStyle(element).paddingLeft);

    element.style.paddingLeft = `${currentMargin - 25}px`;
    return (
        <Container id='Profile-container' fluid style={{
            height: '100vh',
            width: '100vw',
            padding: '60px',
        }} >

            <BoilerPlate />

            <Card id='cardR'>
                <Row >
                    <Row style={{ marginTop: '70px' }} >
                        <Col xs={{ span: 2, offset: 5 }} className='ProfileImg'>
                            <img src={ProfileImage} style={{ border: '2px solid #F2a3a8' }} alt="Profile" className='ProfileImg' />
                        </Col>
                    </Row>

                    <Row style={{ paddingTop: "20px" }} >
                        <Col xs={{ span: 4, order: 'first' }}>
                            <Card>
                                <Row >
                                    <Card id="cardR">
                                        <p className="Text">UserName: Fenrir</p>
                                    </Card>



                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Name: John Doe</p>
                                    </Card>

                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Name: John Doe</p>
                                    </Card>

                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Name: John Doe</p>
                                    </Card>

                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Name: John Doe</p>
                                    </Card>

                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Name: John Doe</p>
                                    </Card>

                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Name: John Doe</p>
                                    </Card>

                                </Row>
                            </Card>
                        </Col>

                        <Col xs={{ span: 4, offset: 4, order: "last" }}>
                            <Card>
                                <Row >
                                    <Card id="cardR">
                                        <p className="Text">Email: john.doe@example.com</p>
                                    </Card>

                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Billing Address : 777 Luca Street</p>
                                    </Card>

                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Shipping Address: 777 Luca Street</p>
                                    </Card>

                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Payment Method: Credit Card</p>
                                    </Card>

                                </Row>
                                <Row>
                                    <Card id="cardR">
                                        <p className="Text">Name: John Doe</p>
                                    </Card>

                                </Row>
                            </Card>
                        </Col>



                    </Row>
                </Row>
            </Card>


        </Container >

    );
}
export default Profile;