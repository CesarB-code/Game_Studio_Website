import {
    Row, Col, Button,
    CardImgOverlay, CardBody, CardText, CardImg, Card,

    Container
} from 'react-bootstrap';
import './MerchList.css'
import Jacket from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/robert-richman-vcTKFYNZop4-unsplash (1).jpg';
import Hat from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/istockphoto-2249125500-1024x1024.jpg';

function MerchList() {
    return (
        <Card id="cardRow" className="rounded-5 flex-column" style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>
            <Row ><h1 id="GameTitle"  >MerchList </h1></Row>

            <Row className="  flex-nowrap  " id="gameList">



                <Col xs={6} md={4} className='d-flex' style={{ backgroundColor: 'transparent' }} >
                    <Container  >

                        <Card className='h-100 Card'>

                            <CardImg variant="top" src={Jacket} style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "stretch",
                            }}></CardImg>


                        </Card>


                    </Container>

                </Col >

                <Col xs={6} md={4} className='d-flex' style={{ backgroundColor: 'transparent' }} >
                    <Container  >

                        <Card className='h-100 Card'>

                            <CardImg id='startSwitch' variant="top" src={Hat} style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "stretch",
                            }}></CardImg>


                        </Card>


                    </Container>

                </Col >

                <Col xs={6} md={4} className='d-flex' style={{ backgroundColor: 'transparent' }} >
                    <Container  >

                        <Card className='h-100  Card'>

                            <CardImg id='startSwitch' variant="top" src={Jacket} style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "stretch",
                            }}></CardImg>


                        </Card>


                    </Container>

                </Col >

                <Col xs={6} md={4} className='d-flex' style={{ backgroundColor: 'transparent' }} >
                    <Container  >

                        <Card className='h-100 Card'>

                            <CardImg id='startSwitch' variant="top" src={Hat} style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "stretch",
                            }}></CardImg>


                        </Card>


                    </Container>

                </Col >


                <Col xs={6} md={4} className='d-flex' style={{ backgroundColor: 'transparent' }} >
                    <Container  >

                        <Card className='h-100 Card'>

                            <CardImg variant="top" src={Jacket} style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "stretch",
                            }}></CardImg>


                        </Card>


                    </Container>

                </Col >

            </Row >


        </Card >
    );
}
export default MerchList;
