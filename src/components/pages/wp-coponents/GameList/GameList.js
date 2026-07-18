import {
    Row, Col, Button,
    CardImgOverlay, CardBody, CardText, CardImg, Card, CardTitle, ButtonGroup,

    Container
} from 'react-bootstrap';
import { useRef, useState } from 'react';
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
    let [isScrolling1, setIsScrolling1] = useState(false);
    let [isScrolling2, setIsScrolling2] = useState(false);

    let [isScrolling3, setIsScrolling3] = useState(false);

    let [isScrolling4, setIsScrolling4] = useState(false);

    let [isScrolling5, setIsScrolling5] = useState(false);

    const handleScroll = (func) => {

        func(true);
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            func(false);
        }, 200);
    };




    return (
        <Card id="cardRow" className="rounded-5 flex-column" >
            <Row ><h1 id="GameTitle"  >Game List</h1></Row>

            <Row className="  flex-nowrap  " id="gameList">



                <Col xs={6} md={4} className='d-flex' style={{ backgroundColor: 'transparent' }} >
                    <Container onClick={() => setCardSide1(!cardSide1)} >
                        {cardSide1 ? (
                            <Card className={`h-100 Card ${cardSide1 ? "switch" : ""}`} >

                                <CardImg id='startSwitch' variant="top" src={Back} style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "stretch",
                                }}></CardImg>


                            </Card>) : (<Card id="Card" className={`  flex-column Card ${cardSide1 ? "switch" : ""}`} >
                                <CardImg className={`card-img ${cardSide1 ? "switch" : ""}`} src={Celestial} />
                                <CardTitle id="CardTitle" className={` card-Title `}>Celestial Blade Chronicle</CardTitle>

                                <CardBody id="CardBody" className={` d-flex flex-column ${cardSide1 ? "switch" : ""}`}>
                                    <CardText id="CardText" className={`card-text ${isScrolling1 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling1) }}>
                                        Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                        We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                        only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                        no one playthrough of the game will be the same.
                                    </CardText>



                                </CardBody>
                                <ButtonGroup size="sm">
                                    <Button className='mt-auto ' >Play<br></br> Demo</Button>


                                    <Button className='mt-auto ' >Buy Full Game </Button>

                                </ButtonGroup>

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
                                    height: "100%",
                                    objectFit: "stretch",
                                }}></CardImg>

                            </Card>) : (<Card id="Card" className={`d-flex flex-column  Card ${cardSide2 ? "switch" : ""}`}>
                                <CardImg className={`  card-img ${cardSide2 ? "switch" : ""}`} src={Blades} />
                                <CardTitle id="CardTitle" className={`card-Title `}>Blades Of The Spirit Realm</CardTitle>

                                <CardBody id="CardBody" className={`d-flex flex-column ${cardSide2 ? "switch" : ""}`}>
                                    <CardText id="CardText" className={`card-text ${isScrolling2 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling2) }} >
                                        Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                        We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                        only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                        no one playthrough of the game will be the same.
                                    </CardText>


                                </CardBody>
                                <ButtonGroup size="sm">
                                    <Button className='mt-auto ' >Play<br></br> Demo</Button>


                                    <Button className='mt-auto ' >Buy Full Game </Button>

                                </ButtonGroup>
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
                                    height: "100%",
                                    objectFit: "stretch",
                                }}></CardImg>

                            </Card>) : (<Card id="Card" className={` d-flex flex-column  Card  ${cardSide3 ? "switch" : ""}`}>
                                <CardImg className={` card-img ${cardSide3 ? "switch" : ""}`} src={Tokyo} />
                                <CardTitle id="CardTitle" className={`card-Title `}>Tokyo Phase Tactics</CardTitle>

                                <CardBody id="CardBody" className={` d-flex flex-column   ${cardSide3 ? "switch" : ""}`}>
                                    <CardText id="CardText" className={`card-text ${isScrolling3 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling3) }}>
                                        Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                        We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                        only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                        no one playthrough of the game will be the same.
                                    </CardText>



                                </CardBody>
                                <ButtonGroup size="sm">
                                    <Button className='mt-auto ' >Play<br></br> Demo</Button>


                                    <Button className='mt-auto ' >Buy Full Game </Button>

                                </ButtonGroup>

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
                                    height: "100%",
                                    objectFit: "stretch",
                                }}></CardImg>

                            </Card>) : (<Card id="Card" className={` d-flex flex-column  Card ${cardSide4 ? "switch" : ""}`}>
                                <CardImg className={`card-img ${cardSide4 ? "switch" : ""}`} src={Requiem} />
                                <CardTitle id="CardTitle" className={`card-Title `}>Requiem Of Broken Heroes</CardTitle>

                                <CardBody id="CardBody" className={`d-flex flex-column  ${cardSide4 ? "switch" : ""}`}>
                                    <CardText id="CardText" className={`card-text ${isScrolling4 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling4) }}>
                                        Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                        We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                        only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                        no one playthrough of the game will be the same.
                                    </CardText>


                                </CardBody>
                                <ButtonGroup size="sm">
                                    <Button className='mt-auto ' >Play<br></br> Demo</Button>


                                    <Button className='mt-auto ' >Buy Full Game </Button>

                                </ButtonGroup>

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
                                    height: "100%",
                                    objectFit: "stretch",
                                }}></CardImg>

                            </Card>) : (<Card id="Card" className={` d-flex flex-column  Card ${cardSide5 ? "switch" : ""}`}>
                                <CardImg className={`card-img ${cardSide5 ? "switch" : ""}`} src={Kingdom} />
                                <CardTitle id="CardTitle" className={`card-Title `}>Kingdoms Of The Silent Moon</CardTitle>

                                <CardBody id="CardBody" className={`d-flex flex-column  ${cardSide5 ? "switch" : ""}`}>
                                    <CardText id="CardText" className={`card-text ${isScrolling5 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling5) }}>
                                        Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                        We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                        only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                        no one playthrough of the game will be the same.
                                    </CardText>


                                </CardBody>
                                <ButtonGroup id="CardButton" size="sm">
                                    <Button className='mt-auto ' >Play<br></br> Demo</Button>


                                    <Button className='mt-auto ' >Buy Full Game </Button>

                                </ButtonGroup>

                            </Card>)
                        }

                    </Container>

                </Col>


            </Row >


        </Card >);
}
export default GameList;