import {
    Row, Col,
    CardImgOverlay, CardBody, CardTitle, CardText, CardImg, Card,

    Container
} from 'react-bootstrap';
import { useState } from 'react';
import Celestial from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Celestial Blade Chronicle.png';
import Blades from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Blades Of The Spirit Realm.png';
import Tokyo from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Tokyo Phase Tactics.png';
import Kingdom from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Kingdoms Of The Silent Moon.png';
import Requiem from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Requiem Of Broken Heroes.png'
import Back from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/vista-wei-OiERUvVrioU-unsplash.jpg';
import './GameList.css';
function GameList() {
    const [cardSide1, setCardSide1] = useState(true);
    const [cardSide2, setCardSide2] = useState(true);
    const [cardSide3, setCardSide3] = useState(true);

    const [cardSide4, setCardSide4] = useState(true);

    const [cardSide5, setCardSide5] = useState(true);



    return (<Container>
        <Row ><h1 style={{ color: 'black', margin: '10px', paddingTop: '20px', textAlign: 'center' }} >Game List</h1></Row>

        <Row className="flex-nowrap  bg-light" style={{ overflowY: 'hidden', overflowX: 'auto' }}>



            <Col xs={6} md={4}    >
                <Container onClick={() => setCardSide1(!cardSide1)} >
                    {cardSide1 ? (
                        <Card className={` Card ${cardSide1 ? "switch" : ""}`}>

                            <CardImg id='startSwitch' src={Back}></CardImg>
                            <CardImgOverlay>

                            </CardImgOverlay>

                        </Card>) : (<Card className={` Card ${cardSide1 ? "switch" : ""}`}>
                            <CardImg className={`card-img ${cardSide1 ? "switch" : ""}`} variant="top" src={Celestial} />
                            <CardBody className={`Card-Body-Background ${cardSide1 ? "switch" : ""}`}>
                                <Card.Title className={`card-Title `}>Celestial Blade Chronicle</Card.Title>
                                <Card.Text className={`card-text `}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <Card.Link className='shiftLeft' href="#" >CardLink</Card.Link>

                                    </Col>
                                    <Col>
                                        <Card.Link href="#" >Another Link</Card.Link>

                                    </Col>
                                </Row>

                            </CardBody>

                        </Card>)
                    }

                </Container>

            </Col>
            <Col xs={6} md={4}     >
                <Container id='card' onClick={() => setCardSide2(!cardSide2)}>
                    {cardSide2 ? (
                        <Card className={` Card ${cardSide2 ? "switch" : ""}`}>
                            <CardImg id='startSwitch' src={Back}></CardImg>

                        </Card>) : (<Card className={` Card ${cardSide2 ? "switch" : ""}`}>
                            <CardImg className={`card-img ${cardSide2 ? "switch" : ""}`} variant="top" src={Blades} />
                            <CardBody className={`Card-Body-Background ${cardSide2 ? "switch" : ""}`}>
                                <Card.Title className={`card-Title `}>Blades Of The Spirit Realm</Card.Title>
                                <Card.Text className={`card-text `}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <Card.Link className='shiftLeft' href="#" >CardLink</Card.Link>

                                    </Col>
                                    <Col>
                                        <Card.Link href="#" >Another Link</Card.Link>

                                    </Col>
                                </Row>

                            </CardBody>

                        </Card>)
                    }

                </Container>

            </Col>
            <Col xs={6} md={4}    >
                <Container onClick={() => setCardSide3(!cardSide3)} >
                    {cardSide3 ? (
                        <Card className={` Card ${cardSide3 ? "switch" : ""}`} >
                            <CardImg id='startSwitch' src={Back}></CardImg>

                        </Card>) : (<Card className={` Card ${cardSide3 ? "switch" : ""}`}>
                            <CardImg className={`card-img ${cardSide3 ? "switch" : ""}`} variant="top" src={Tokyo} />
                            <Card.Body className={`Card-Body-Background ${cardSide3 ? "switch" : ""}`}>
                                <Card.Title className={`card-Title `}>Tokyo Phase Tactics</Card.Title>
                                <Card.Text className={`card-text `}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </Card.Text>

                                <Row>
                                    <Col>
                                        <Card.Link className='shiftLeft' href="#" >CardLink</Card.Link>

                                    </Col>
                                    <Col>
                                        <Card.Link href="#" >Another Link</Card.Link>

                                    </Col>
                                </Row>

                            </Card.Body>

                        </Card>)
                    }

                </Container>

            </Col>
            <Col xs={6} md={4}  >
                <Container onClick={() => setCardSide4(!cardSide4)}>
                    {cardSide4 ? (
                        <Card className={` Card ${cardSide4 ? "switch" : ""}`}>
                            <CardImg id='startSwitch' src={Back}></CardImg>

                        </Card>) : (<Card className={` Card ${cardSide4 ? "switch" : ""}`}>
                            <CardImg className={`card-img ${cardSide4 ? "switch" : ""}`} variant="top" src={Requiem} />
                            <Card.Body className={`Card-Body-Background ${cardSide4 ? "switch" : ""}`}>
                                <Card.Title className={`card-Title `}>Requiem Of Broken Heroes</Card.Title>
                                <Card.Text className={`card-text `}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </Card.Text>

                                <Row>
                                    <Col>
                                        <Card.Link className='shiftLeft' href="#" >CardLink</Card.Link>

                                    </Col>
                                    <Col>
                                        <Card.Link href="#" >Another Link</Card.Link>

                                    </Col>
                                </Row>

                            </Card.Body>

                        </Card>)
                    }

                </Container>

            </Col>
            <Col xs={6} md={4}  >
                <Container onClick={() => setCardSide5(!cardSide5)}>
                    {cardSide5 ? (
                        <Card className={` Card ${cardSide5 ? "switch" : ""}`}>
                            <CardImg id='startSwitch' src={Back}></CardImg>

                        </Card>) : (<Card className={` Card ${cardSide5 ? "switch" : ""}`}>
                            <CardImg className={`card-img ${cardSide5 ? "switch" : ""}`} variant="top" src={Kingdom} />
                            <Card.Body className={`Card-Body-Background ${cardSide5 ? "switch" : ""}`}>
                                <Card.Title className={`card-Title `}>Kingdoms Of The Silent Moon</Card.Title>
                                <Card.Text className={`card-text `}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </Card.Text>

                                <Row>
                                    <Col>
                                        <Card.Link className='shiftLeft' href="#" >CardLink</Card.Link>

                                    </Col>
                                    <Col>
                                        <Card.Link href="#" >Another Link</Card.Link>

                                    </Col>
                                </Row>

                            </Card.Body>

                        </Card>)
                    }

                </Container>

            </Col>


        </Row>


    </Container >);
}
export default GameList;