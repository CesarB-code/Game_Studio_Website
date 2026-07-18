import {
    Row, Col,
    Card, CardImg,
    Container,
    CardTitle,
    CardBody
} from 'react-bootstrap';
import BoilderPlate from '../BoilerPlate.js/BoilerPlate.js';
import './TeamMembers.css'
import AnimeLatina from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/KomikoAI.png'
import latina from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/photo-1524502397800-2eeaad7c3fe5.avif'
import AnimeEuroFemale from "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/KomikoAI (2).png";
import euroFemale from "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/meritt-thomas-aoQ4DYZLE_E-unsplash.jpg";
import euroMale from "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/christian-buehner-DItYlc26zVI-unsplash.jpg"
import AnimeEuroMale from "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/KomikoAI (6).png"
import ArabMale from "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/irene-strong-v2aKnjMbP_k-unsplash.jpg";
import AnimeArabMale from "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/KomikoAI (3).png";
function TeamMembers() {
    return (
        <Container fluid style={{ overflowX: "hidden", overflowY: "scroll", background: "black", height: '100%' }}>
            <Row >
                <BoilderPlate className="top" fixed="top" />
            </Row>
            <Row ><h1 style={{ color: 'white', paddingTop: '60px', textAlign: 'center', marginLeft: "0px" }} >Team Memebers</h1></Row>

            <Row >
                <Row><h1 id="teamMemberRow">CEO</h1>

                    <Col>
                        <Card id='Card'>
                            <CardImg id='animeProfile' src={AnimeLatina} ></CardImg>
                        </Card>
                    </Col>
                    <Col>
                        <Card id='Card' >
                            <CardImg id='animeProfile' src={latina} ></CardImg>

                        </Card>
                    </Col>
                </Row>
            </Row>
            <Row>
                <Card >
                    <CardBody id="TeamMemberDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta consectetur arcu quis iaculis. Fusce eleifend pellentesque rutrum. Donec rutrum dolor a pulvinar pretium. Integer id odio hendrerit, mattis erat et, fringilla est. Mauris non tortor sit amet elit condimentum varius. Nulla fermentum urna sit amet ante sagittis, id cursus nisi elementum. Suspendisse dapibus odio tortor, nec rutrum dolor mollis sit amet. Etiam ac lorem et velit condimentum dapibus. Sed mollis, turpis quis varius pellentesque, lectus turpis accumsan diam, vitae finibus lacus sem eget lacus. Nullam eu dictum magna. Donec venenatis mi elit. Pellentesque sit amet sollicitudin augue, sit amet porttitor ipsum. Nullam viverra, dui et scelerisque pretium, felis lacus condimentum libero, id porta augue neque nec augue. Curabitur eleifend ipsum ut lacus lacinia, et condimentum quam auctor. Proin at pharetra tellus.

                    </CardBody>
                </Card>
            </Row>

            <Row><h1 id="teamMemberRow">Marketing Lead</h1></Row>
            <Row >

                <Col>

                    <Card id='Card'>
                        <CardImg id='animeProfile' src={AnimeEuroFemale} ></CardImg>
                    </Card>
                </Col>
                <Col>
                    <Card id='Card' >
                        <CardImg id='animeProfile' src={euroFemale} ></CardImg>

                    </Card>
                </Col>

            </Row>
            <Row>
                <Card >
                    <CardBody id="TeamMemberDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta consectetur arcu quis iaculis. Fusce eleifend pellentesque rutrum. Donec rutrum dolor a pulvinar pretium. Integer id odio hendrerit, mattis erat et, fringilla est. Mauris non tortor sit amet elit condimentum varius. Nulla fermentum urna sit amet ante sagittis, id cursus nisi elementum. Suspendisse dapibus odio tortor, nec rutrum dolor mollis sit amet. Etiam ac lorem et velit condimentum dapibus. Sed mollis, turpis quis varius pellentesque, lectus turpis accumsan diam, vitae finibus lacus sem eget lacus. Nullam eu dictum magna. Donec venenatis mi elit. Pellentesque sit amet sollicitudin augue, sit amet porttitor ipsum. Nullam viverra, dui et scelerisque pretium, felis lacus condimentum libero, id porta augue neque nec augue. Curabitur eleifend ipsum ut lacus lacinia, et condimentum quam auctor. Proin at pharetra tellus.

                    </CardBody>
                </Card>
            </Row>
            <Row><h1 id="teamMemberRow"> Lead Game Designer</h1></Row>
            <Row >

                <Col>
                    <Card id='Card'>
                        <CardImg id='animeProfile' src={AnimeEuroMale} ></CardImg>
                    </Card>
                </Col>
                <Col>
                    <Card id='Card' >
                        <CardImg id='animeProfile' src={euroMale} ></CardImg>

                    </Card>
                </Col>

            </Row>
            <Row>
                <Card >
                    <CardBody id="TeamMemberDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta consectetur arcu quis iaculis. Fusce eleifend pellentesque rutrum. Donec rutrum dolor a pulvinar pretium. Integer id odio hendrerit, mattis erat et, fringilla est. Mauris non tortor sit amet elit condimentum varius. Nulla fermentum urna sit amet ante sagittis, id cursus nisi elementum. Suspendisse dapibus odio tortor, nec rutrum dolor mollis sit amet. Etiam ac lorem et velit condimentum dapibus. Sed mollis, turpis quis varius pellentesque, lectus turpis accumsan diam, vitae finibus lacus sem eget lacus. Nullam eu dictum magna. Donec venenatis mi elit. Pellentesque sit amet sollicitudin augue, sit amet porttitor ipsum. Nullam viverra, dui et scelerisque pretium, felis lacus condimentum libero, id porta augue neque nec augue. Curabitur eleifend ipsum ut lacus lacinia, et condimentum quam auctor. Proin at pharetra tellus.

                    </CardBody>
                </Card>
            </Row>
            <Row><h1 id="teamMemberRow"> Frontend Lead Developer</h1></Row>

            <Row >

                <Col>
                    <Card id='Card'>
                        <CardImg id='animeProfile' src={AnimeArabMale} ></CardImg>
                    </Card>
                </Col>
                <Col>
                    <Card id='Card' >
                        <CardImg id='animeProfile' src={ArabMale} ></CardImg>

                    </Card>
                </Col>

            </Row>
            <Row>
                <Card >
                    <CardBody id="TeamMemberDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta consectetur arcu quis iaculis. Fusce eleifend pellentesque rutrum. Donec rutrum dolor a pulvinar pretium. Integer id odio hendrerit, mattis erat et, fringilla est. Mauris non tortor sit amet elit condimentum varius. Nulla fermentum urna sit amet ante sagittis, id cursus nisi elementum. Suspendisse dapibus odio tortor, nec rutrum dolor mollis sit amet. Etiam ac lorem et velit condimentum dapibus. Sed mollis, turpis quis varius pellentesque, lectus turpis accumsan diam, vitae finibus lacus sem eget lacus. Nullam eu dictum magna. Donec venenatis mi elit. Pellentesque sit amet sollicitudin augue, sit amet porttitor ipsum. Nullam viverra, dui et scelerisque pretium, felis lacus condimentum libero, id porta augue neque nec augue. Curabitur eleifend ipsum ut lacus lacinia, et condimentum quam auctor. Proin at pharetra tellus.

                    </CardBody>
                </Card>
            </Row>

        </Container >
    );
}
export default TeamMembers;