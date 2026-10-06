import {
    Row, Col,

    Container
} from 'react-bootstrap';
import GameList from '../wp-coponents/GameList/GameList.js';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate';
import AISoftware from '../wp-coponents/AISoftware/AISoftware.js';
import MerchList from '../wp-coponents/MerchList/MerchList.js';


import './Store.css';
function Store() {
    return (
        <Container fluid className='main-background'>

            <Row className='store-nav-row'>
                <BoilerPlate />
            </Row>

            <Row className="store-title-row"><h1 id="StoreTitle" className="store-title">Store</h1></Row>

            <Row className="align-items-center justify-content-center store-intro-row">
                <Col className='col-10'>
                    <div className="store-intro-copy">
                        <h2 className="store-intro-title">Explore Our Collections</h2>
                        <p className="store-intro-paragraph">
                            Discover everything Cyclone Game Studio has to offer. Browse our premium games featuring immersive storytelling and cutting-edge graphics, explore our advanced AI-powered software solutions, and find exclusive merchandise celebrating your favorite titles and characters.
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className='store-content-row g-4'>

                <AISoftware />



            </Row>
            <Row className='store-game-list-row g-4'>
                <Col xs={12}>
                    <div className='store-section-card'>
                        <GameList button1='Buy Demo' button2='Buy 25$' />
                    </div>
                </Col>
            </Row>
            <Row className='store-merch-row g-4'>
                <Col xs={12}>
                    <div className='store-section-card store-merch-card'>
                        <MerchList />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Store;