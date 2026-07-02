import {
    Row, Col, Button,
    CardImgOverlay, CardBody, CardTitle, CardText, CardImg, Card,

    Container
} from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import Celestial from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Celestial Blade Chronicle.png';
import Blades from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Blades Of The Spirit Realm.png';
import Tokyo from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Tokyo Phase Tactics.png';
import Kingdom from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Kingdoms Of The Silent Moon.png';
import Requiem from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Requiem Of Broken Heroes.png'
import Back from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Glitter_Particles_Motion_Background_04.gif';

import './GameList.css';
function GameList() {
    const [cardSide1, setCardSide1] = useState(true);
    const [cardSide2, setCardSide2] = useState(true);
    const [cardSide3, setCardSide3] = useState(true);

    const [cardSide4, setCardSide4] = useState(true);

    const [cardSide5, setCardSide5] = useState(true);
    const timeoutRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const handleScroll = () => {
        setIsScrolling(true);

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 200);
    };




    return (<Card id="cardRow" className="rounded-5 flex-column" style={{ backgroundColor: 'transparent' }}>
        <Row ><h1 style={{ color: 'white', paddingTop: '20px', textAlign: 'center', marginLeft: "0px" }} >Game List</h1></Row>

        <Row className="  flex-nowrap  " id="gameList">



            <Col xs={6} md={4} className='d-flex' style={{ backgroundColor: 'transparent' }} >
                <Container onClick={() => setCardSide1(!cardSide1)} >
                    {cardSide1 ? (
                        <Card className={`h-100 Card ${cardSide1 ? "switch" : ""}`}>

                            <CardImg id='startSwitch' variant="top" src={Back} style={{
                                width: "100%",
                                height: "440px",
                                objectFit: "stretch",
                            }}></CardImg>
                            <CardImgOverlay id='startSwitch'>
                                <Row>
                                    {/* <UnityCharacter useRef={canvasRef1} useState={[unityInstance1, setUnityInstance1]} /> */}
                                </Row>
                            </CardImgOverlay>

                        </Card>) : (<Card className={`  h-100" Card ${cardSide1 ? "switch" : ""}`}>
                            <CardImg className={`card-img ${cardSide1 ? "switch" : ""}`} variant="top" src={Celestial} />
                            <CardBody className={` d-flex flex-column Card-Body-Background ${cardSide1 ? "switch" : ""}`}>
                                <Card.Title className={` card-Title `}>Celestial Blade Chronicle</Card.Title>
                                <CardText className={`card-text ${isScrolling ? "scrolling" : ""}`} onScroll={handleScroll}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>
                                <Row className='mt-auto'>
                                    <Col id='buttonRow'>
                                        <Button className='mt-auto ' href="#" >Card<br></br> Link</Button>

                                    </Col>
                                    <Col id='buttonRow'>
                                        <Button className='mt-auto ' href="#" >Another Link</Button>

                                    </Col>
                                </Row>

                            </CardBody>

                        </Card>)
                    }

                </Container>

            </Col >
            <Col xs={6} md={4} className='d-flex'   >
                <Container onClick={() => setCardSide2(!cardSide2)}>
                    {cardSide2 ? (
                        <Card className={`h-100 Card ${cardSide2 ? "switch" : ""}`}>
                            <CardImg id='startSwitch' variant="top" src={Back} style={{
                                width: "100%",
                                height: "440px",
                                objectFit: "stretch",
                            }}></CardImg>

                        </Card>) : (<Card className={`d-flex flex-column h-100 Card ${cardSide2 ? "switch" : ""}`}>
                            <CardImg className={`  card-img ${cardSide2 ? "switch" : ""}`} variant="top" src={Blades} />
                            <CardBody className={`d-flex flex-column Card-Body-Background ${cardSide2 ? "switch" : ""}`}>
                                <Card.Title className={`card-Title `}>Blades Of The Spirit Realm</Card.Title>
                                <CardText className={`card-text ${isScrolling ? "scrolling" : ""}`} onScroll={handleScroll}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>
                                <Row className='mt-auto'>
                                    <Col id='buttonRow'>
                                        <Button className='mt-auto ' href="#" >Card <br></br> Link</Button>

                                    </Col>
                                    <Col id='buttonRow'>
                                        <Button className='mt-auto ' href="#" >Another Link</Button>

                                    </Col>
                                </Row>

                            </CardBody>

                        </Card>)
                    }

                </Container>

            </Col>
            <Col xs={6} md={4} className='d-flex'>
                <Container onClick={() => setCardSide3(!cardSide3)} >
                    {cardSide3 ? (
                        <Card className={`h-100 Card ${cardSide3 ? "switch" : ""}`} >
                            <CardImg id='startSwitch' variant="top" src={Back} style={{
                                width: "100%",
                                height: "440px",
                                objectFit: "stretch",
                            }}></CardImg>

                        </Card>) : (<Card className={`h-100 Card ${cardSide3 ? "switch" : ""}`}>
                            <CardImg className={`'h-100' card-img ${cardSide3 ? "switch" : ""}`} variant="top" src={Tokyo} />
                            <Card.Body className={` d-flex flex-column h-100 Card-Body-Background ${cardSide3 ? "switch" : ""}`}>
                                <Card.Title className={`card-Title `}>Tokyo Phase Tactics</Card.Title>
                                <CardText className={`card-text ${isScrolling ? "scrolling" : ""}`} onScroll={handleScroll}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>

                                <Row className='mt-auto'>
                                    <Col id='buttonRow'>
                                        <Button  >Card  Link</Button>

                                    </Col>
                                    <Col id='buttonRow'>
                                        <Button href="#" >Another Link</Button>

                                    </Col>
                                </Row>

                            </Card.Body>

                        </Card>)
                    }

                </Container>

            </Col>
            <Col xs={6} md={4} className='d-flex' style={{ marginTop: "5px" }} >
                <Container onClick={() => setCardSide4(!cardSide4)}>
                    {cardSide4 ? (
                        <Card className={`h-100 Card ${cardSide4 ? "switch" : ""}`}>
                            <CardImg id='startSwitch' variant="top" src={Back} style={{
                                width: "100%",
                                height: "440px",
                                objectFit: "stretch",
                            }}></CardImg>

                        </Card>) : (<Card className={`  Card ${cardSide4 ? "switch" : ""}`}>
                            <CardImg className={`card-img ${cardSide4 ? "switch" : ""}`} variant="top" src={Requiem} />
                            <Card.Body className={`d-flex flex-column Card-Body-Background ${cardSide4 ? "switch" : ""}`}>
                                <Card.Title className={`card-Title `}>Requiem Of Broken Heroes</Card.Title>
                                <CardText className={`card-text ${isScrolling ? "scrolling" : ""}`} onScroll={handleScroll}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>

                                <Row className='mt-auto'>
                                    <Col id='buttonRow'>
                                        <Button href="#" >Card <br></br> Link</Button>

                                    </Col>
                                    <Col id='buttonRow'>
                                        <Button href="#" >Another Link</Button>

                                    </Col>
                                </Row>

                            </Card.Body>

                        </Card>)
                    }

                </Container>

            </Col>
            <Col xs={6} md={4} className='d-flex' style={{ marginTop: "5px" }} >
                <Container onClick={() => setCardSide5(!cardSide5)}>
                    {cardSide5 ? (
                        <Card className={`h-100 Card ${cardSide5 ? "switch" : ""}`}>
                            <CardImg id='startSwitch' variant="top" src={Back} style={{
                                width: "100%",
                                height: "440px",
                                objectFit: "stretch",
                            }}></CardImg>

                        </Card>) : (<Card className={`h-100 Card ${cardSide5 ? "switch" : ""}`}>
                            <CardImg className={`card-img ${cardSide5 ? "switch" : ""}`} variant="top" src={Kingdom} />
                            <Card.Body className={`d-flex flex-column Card-Body-Background ${cardSide5 ? "switch" : ""}`}>
                                <Card.Title className={`card-Title `}>Kingdoms Of The Silent Moon</Card.Title>
                                <CardText className={`card-text ${isScrolling ? "scrolling" : ""}`} onScroll={handleScroll}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>

                                <Row className='mt-auto'>
                                    <Col id='buttonRow'>
                                        <Button href="#" >Card <br></br> Link</Button>

                                    </Col>
                                    <Col id='buttonRow'>
                                        <Button href="#" >Another Link</Button>

                                    </Col>
                                </Row>

                            </Card.Body>

                        </Card>)
                    }

                </Container>

            </Col>


        </Row >


    </Card >);
}
export default GameList;