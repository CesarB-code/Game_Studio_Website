import {
    Row, Col,
    Card, CardImg,
    Container
} from 'react-bootstrap';
import BoilderPlate from '../BoilerPlate.js/BoilerPlate.js';
import './TeamMembers.css'
import AnimeLatina from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/KomikoAI.png'
import latina from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/photo-1524502397800-2eeaad7c3fe5.avif'
function TeamMembers() {
    return (
        <Container fluid style={{ overflowX: "hidden", overflowY: "scroll", background: "black", height: '100%' }}>
            <Row >
                <BoilderPlate className="top" fixed="top" />
            </Row>
            <Row ><h1 style={{ color: 'white', paddingTop: '60px', textAlign: 'center', marginLeft: "0px" }} >Team Memebers</h1></Row>

            <Row >

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

            <Row >

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

        </Container >
    );
}
export default TeamMembers;