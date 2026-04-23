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
        <Row className='bg-dark' style={{ color: 'white' }}><h1 >Game List</h1></Row>

        <Row className="flex-nowrap  bg-dark" style={{ padding: 20, overflowY: 'hidden', overflowX: 'auto' }}>



            <Col xs={6} md={4} onPointerMove={Interaction.handleMouseMove}
                onPointerUp={Interaction.handleMouseUp} onPointerDown={Interaction.handleMouseDown} style={{ cursor: Interaction.isDragging ? 'grabbing' : 'grab' }}
            >
                <Card style={{ width: Interaction.width, height: Interaction.height }} >
                    <Card.Img variant="top" src={Celestial} />
                    <Card.Body >
                        <Card.Title>Celestial Blade Chronicle</Card.Title>
                        <Card.Text >
                            Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                            We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                            only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                            no one playthrough of the game will be the same.
                        </Card.Text>
                        <Card.Link href="#" >NYTimes Report</Card.Link>
                        <Card.Link href="#"></Card.Link>
                    </Card.Body>

                </Card>

            </Col>
            <Col xs={6} md={4}  >
                <Card className='cardContainer'>
                    <Card.Img variant="top" src={Blades} />
                    <Card.Body>
                        <Card.Title >Blades of the Spirit Realm</Card.Title>
                        <Card.Text >
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
                <Card className='cardContainerr'>
                    <Card.Img variant="top" src={Tokyo} />
                    <Card.Body>
                        <Card.Title >Tokyo Phase Tactics</Card.Title>
                        <Card.Text >
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
            <Col xs={6} md={4}  >
                <Card className='cardContainer'>
                    <Card.Img variant="top" src={Requiem} />
                    <Card.Body>
                        <Card.Title >Requiem of Broken Heroes</Card.Title>
                        <Card.Text >
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
                <Card className='cardContainer'>
                    <Card.Img variant="top" src={Kingdom} />
                    <Card.Body>
                        <Card.Title >Kingdoms of the Silent Moon</Card.Title>
                        <Card.Text >
                            <p>Cyclone studio has made an effort to keep up with the lateest </p>
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


    </Container>);
}
export default GameList;