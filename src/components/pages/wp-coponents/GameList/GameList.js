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
import Card from 'react-bootstrap/Card';
import Celestial from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Celestial Blade Chronicle.png';
import Blades from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Blades Of The Spirit Realm.png';
import Tokyo from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Tokyo Phase Tactics.png';
import Kingdom from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Kingdoms Of The Silent Moon.png';
import Requiem from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/Requiem Of Broken Heroes.png'
import * as Interaction from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/InterationMethods.js';
import './GameList.css';
function GameList() {

    return (<Container>
        <Row className='bg-light' style={{ color: 'black' }}><h1 >Game List</h1></Row>

        <Row className="flex-nowrap  bg-light" style={{ padding: 20, overflowY: 'hidden', overflowX: 'auto' }}>



            <Col xs={6} md={4} onPointerMove={Interaction.handleMouseMove}
                onPointerUp={Interaction.handleMouseUp} onPointerDown={Interaction.handleMouseDown} style={{ cursor: Interaction.isDragging ? 'grabbing' : 'grab' }}
            >
                <Card className="Card"  >
                    <Card.Img variant="top" src={Celestial} />
                    <Card.Body className="Card-Body-Background">
                        <Card.Title className="card-Title">Celestial Blade Chronicle</Card.Title>
                        <Card.Text className="card-text">
                            <b>Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                                We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                                only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                                no one playthrough of the game will be the same.</b>
                        </Card.Text>
                        <Card.Link href="#" >NYTimes Report</Card.Link>
                        <Card.Link href="#"></Card.Link>
                    </Card.Body>

                </Card>

            </Col>
            <Col xs={6} md={4}  >
                <Card className='Card'>
                    <Card.Img variant="top" src={Blades} />
                    <Card.Body className="Card-Body-Background">
                        <Card.Title className="card-Title">Blades of the Spirit Realm</Card.Title>
                        <Card.Text className="card-text">
                            <b> Cyclone studio has made an effort to keep up with the lateest </b>
                        </Card.Text>
                        <Row>
                            <Col>
                                <Card.Link href="#" >Card Link</Card.Link>
                            </Col>
                            <Col>
                                <Card.Link href="#" >Another Link</Card.Link>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
            </Col>
            <Col xs={6} md={4} >
                <Card className='Card'>
                    <Card.Img variant="top" src={Tokyo} />
                    <Card.Body className="Card-Body-Background">
                        <Card.Title className="card-Title">Tokyo Phase Tactics</Card.Title>
                        <Card.Text className="card-text">
                            <b> Cyclone studio has made an effort to keep up with the lateest </b>
                        </Card.Text>
                        <Row>
                            <Col>
                                <Card.Link className="Card-Link" href="#" >Card Link</Card.Link>
                            </Col>
                            <Col>
                                <Card.Link href="#" >Another Link</Card.Link>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
            </Col>
            <Col xs={6} md={4}  >
                <Card className='Card'>
                    <Card.Img variant="top" src={Requiem} />
                    <Card.Body className="Card-Body-Background">
                        <Card.Title className='card-Title' >Requiem of Broken Heroes</Card.Title>
                        <Card.Text className='card-text'>
                            <b> Cyclone studio has made an effort to keep up with the lateest </b>
                        </Card.Text>
                        <Row>
                            <Col>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Col>
                            <Col>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
            </Col>
            <Col xs={6} md={4}  >
                <Card className='Card'>
                    <Card.Img variant="top" src={Kingdom} />
                    <Card.Body className="Card-Body-Background">
                        <Card.Title >Kingdoms of the Silent Moon</Card.Title>
                        <Card.Text >
                            <b>Cyclone studio has made an effort to keep up with the lateest </b>
                        </Card.Text>
                        <Row>
                            <Col>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Col>
                            <Col>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
            </Col>


        </Row>


    </Container >);
}
export default GameList;