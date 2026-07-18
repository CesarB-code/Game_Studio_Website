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
            <Row style={{ background: 'transparent' }}>
                <BoilerPlate />

            </Row>

            <Row style={{ height: '300px', marginBottom: '500px', background: 'transparent' }}>
                <GameList />
            </Row>
            <Row style={{ height: '500px', marginTop: '30px', background: 'transparent' }}>
                <AISoftware />
            </Row>
            <Row style={{ height: '500px', marginTop: '30px', background: 'transparent' }}>
                <MerchList />
            </Row>


        </Container >

    );
}
export default Store;