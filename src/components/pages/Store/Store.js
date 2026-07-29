import {
    Row, Col,

    Container
} from 'react-bootstrap';
import ContentCarousel from '../wp-coponents/ContentCarousel/ContentCarousel.js';
import GameList from '../wp-coponents/GameList/GameList.js';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate';
import AISoftware from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/AISoftware/AISoftware.js';
import overLayImg from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/KomikoAI (7).png';
import MerchList from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/MerchList/MerchList.js';


import './Store.css';
function Store() {
    return (
        <Container fluid className='main-background'>

            <Row className='store-nav-row'>
                <BoilerPlate />
            </Row>

            <Row style={{ marginTop: '60px' }}><h1 id="StoreTitle" style={{
                height: '100%',
                color: 'white',
                paddingTop: '20px',
                textAlign: 'center',
                fontSize: '52px',
                marginLeft: '0px',
                padding: '0px',
                margin: '0px',
                textShadow: '2px 2px 4px black',
            }} >Store</h1></Row>

            <Row className='align-items-center justify-content-center' style={{
                backgroundColor: 'transparent', marginBottom: '40px', marginTop: '30px'
            }}>
                <Col className='col-10'>
                    <div style={{ color: 'white', textAlign: 'center', padding: '30px' }}>
                        <h2 style={{ fontFamily: 'fantasy', fontSize: '28px', marginBottom: '15px', textShadow: '2px 2px 4px black' }}>Explore Our Collections</h2>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px', textShadow: '2px 2px 4px black' }}>
                            Discover everything Cyclone Game Studio has to offer. Browse our premium games featuring immersive storytelling and cutting-edge graphics, explore our advanced AI-powered software solutions, and find exclusive merchandise celebrating your favorite titles and characters.
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className='store-content-row g-4'>

                <AISoftware style={{ width: '100%' }} />



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