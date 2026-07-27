import {
    Row, Col, Button,
    CardImgOverlay, CardBody, CardText, CardImg, Card, CardTitle, ButtonGroup,

    Container
} from 'react-bootstrap';
import { useRef, useState } from 'react';
import Celestial from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/boris-misevic-vQfUboV8Pmk-unsplash.jpg';
import Blades from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/khanh-nguyen-5X1rpvoQT5A-unsplash.jpg';
import Tokyo from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/le-anh-Bh-qSsMmTbY-unsplash.jpg';
import Kingdom from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/le-anh-N9apPcgfj1Q-unsplash.jpg';
import Requiem from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/le-anh-wHbRlKKq0Xk-unsplash.jpg'
import Back from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/images.png';
import { RiArrowGoBackLine } from "react-icons/ri";
import './EventCards.css';
function EventCards() {
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

            <Row className="  flex-nowrap  " id="gameList">



                <Col xs={6} md={4} className='d-flex' style={{ backgroundColor: 'transparent' }} >
                    <Container style={{ paddingTop: '50px', height: '80%' }} >

                        <Card id="Card" className={`  flex-column Card `} >
                            <CardImg className={`card-img `} src={Celestial} />
                            <CardTitle id="CardTitle" className={` card-Title `}>Celestial Blade Chronicle</CardTitle>

                            <CardBody id="CardBody" className={` d-flex flex-column`}>
                                <CardText id="CardText" className={`card-text ${isScrolling1 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling1) }}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>



                            </CardBody>
                            <ButtonGroup id="CardButton" size="sm">
                                <Button className='mt-auto ' >Play Demo</Button>


                                <Button className='mt-auto ' >Buy Full Game </Button>

                            </ButtonGroup>

                        </Card>


                    </Container>

                </Col >
                <Col xs={6} md={4} className='d-flex'   >
                    <Container style={{ paddingTop: '50px', height: '80%' }} >

                        <Card id="Card" className={`d-flex flex-column  Card `}>
                            <CardImg className={`  card-img `} src={Blades} />
                            <CardTitle id="CardTitle" className={`card-Title `}>Blades Of The Spirit Realm</CardTitle>

                            <CardBody id="CardBody" className={`d-flex flex-column `}>
                                <CardText id="CardText" className={`card-text ${isScrolling2 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling2) }} >
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>


                            </CardBody>
                            <ButtonGroup id="CardButton" size="sm">
                                <Button className='mt-auto ' >Play Demo</Button>


                                <Button className='mt-auto ' >Buy Full Game </Button>

                            </ButtonGroup>
                        </Card>


                    </Container>

                </Col>
                <Col xs={6} md={4} className='d-flex'>
                    <Container style={{ paddingTop: '50px', height: '80%' }} >
                        <Card id="Card" className={` d-flex flex-column  Card `}>
                            <CardImg className={` card-img `} src={Tokyo} />
                            <CardTitle id="CardTitle" className={`card-Title `}>Tokyo Phase Tactics</CardTitle>

                            <CardBody id="CardBody" className={` d-flex flex-column   `}>
                                <CardText id="CardText" className={`card-text ${isScrolling3 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling3) }}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>



                            </CardBody>
                            <ButtonGroup id="CardButton" size="sm">
                                <Button className='mt-auto ' >Play Demo</Button>


                                <Button className='mt-auto ' >Buy Full Game </Button>

                            </ButtonGroup>

                        </Card>


                    </Container>

                </Col>
                <Col xs={6} md={4} className='d-flex' >
                    <Container style={{ paddingTop: '50px', height: '80%' }} >
                        <Card id="Card" className={` d-flex flex-column  Card `}>
                            <CardImg className={`card-img `} src={Requiem} />
                            <CardTitle id="CardTitle" className={`card-Title `}>Requiem Of Broken Heroes</CardTitle>

                            <CardBody id="CardBody" className={`d-flex flex-column  `}>
                                <CardText id="CardText" className={`card-text ${isScrolling4 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling4) }}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>


                            </CardBody>
                            <ButtonGroup id="CardButton" size="sm">
                                <Button className='mt-auto ' >Play Demo</Button>


                                <Button className='mt-auto ' >Buy Full Game </Button>

                            </ButtonGroup>

                        </Card>


                    </Container>

                </Col>
                <Col xs={6} md={4} className='d-flex' >
                    <Container style={{ paddingTop: '50px', height: '80%' }}>
                        <Card id="Card" className={` d-flex flex-column  Card `}>
                            <CardImg className={`card-img `} src={Kingdom} />
                            <CardTitle id="CardTitle" className={`card-Title `}>Kingdoms Of The Silent Moon</CardTitle>

                            <CardBody id="CardBody" className={`d-flex flex-column  `}>
                                <CardText id="CardText" className={`card-text ${isScrolling5 ? "scrolling" : ""}`} onScroll={() => { handleScroll(setIsScrolling5) }}>
                                    Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                    We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                    only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                    no one playthrough of the game will be the same.
                                </CardText>


                            </CardBody>
                            <ButtonGroup id="CardButton" size="sm">
                                <Button className='mt-auto ' >Play Demo</Button>


                                <Button className='mt-auto ' >Buy Full Game </Button>

                            </ButtonGroup>

                        </Card>


                    </Container>

                </Col>


            </Row >


        </Card >);
}
export default EventCards;