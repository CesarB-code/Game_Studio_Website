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
    return (
        <Container fluid style={{
            height: '100%',
            width: '100%',
        }} >

            <BoilerPlate />


            <Row id='Profile-container'>
                <Row style={{ marginTop: '70px' }} >
                    <Col xs={{ span: 10, offset: 5 }} className='ProfileImg'>
                        <img src={ProfileImage} style={{ border: '2px solid #F2a3a8' }} alt="Profile" className='ProfileImg' />
                    </Col>
                </Row>

                <Row style={{ paddingTop: "20px" }} >
                    <Col xs={{ span: 4, order: 'first' }}>
                        <Card>
                            <Row >
                                <p className="Text">UserName: Fenrir</p>


                            </Row>
                            <Row>
                                <p className="Text">Name: John Doe</p>

                            </Row>
                            <Row>
                                <p className="Text">Name: John Doe</p>

                            </Row>
                            <Row>
                                <p className="Text">Name: John Doe</p>

                            </Row>
                            <Row>
                                <p className="Text">Name: John Doe</p>

                            </Row>
                        </Card>
                    </Col>

                    <Col xs={{ span: 4, offset: 4, order: "last" }}>
                        <Card>
                            <Row >
                                <p className="Text">Email: john.doe@example.com</p>


                            </Row>
                            <Row>
                                <p className="Text">Billing Address : 777 Luca Street</p>

                            </Row>
                            <Row>
                                <p className="Text">Name: John Doe</p>

                            </Row>
                            <Row>
                                <p className="Text">Name: John Doe</p>

                            </Row>
                            <Row>
                                <p className="Text">Name: John Doe</p>

                            </Row>
                        </Card>
                    </Col>



                </Row>
            </Row>

            <Row style={{ padding: '0px' }} >
                <BottomWebLinks />
            </Row>

        </Container >

    );
}
export default Profile;