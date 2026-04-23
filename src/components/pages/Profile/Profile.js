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
import BoilerPlate from '../BoilerPlate.js/BoilerPlate';
import ProfileImage from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/istockphoto-828763406-1024x1024.jpg'
import './Profile.css'
import BottomWebLinks from '../BottomWebLinks/BottomWebLinks.js';
function Profile() {
    return (
        <Container fluid className='Container full-page'>
            <Row style={{ marginBottom: 30 }}>
                <BoilerPlate />

            </Row>

            <Row className=' justify-content-center ' style={{ marginTop: 30 }} >
                <Col xs={6} className='ProfileImg'>
                    <img src={ProfileImage} alt="Profile" className='ProfileImg' />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Row style={{ color: 'white', fontFamily: 'fantasy', fontSize: 20, marginTop: 30 }}>
                    <p>UserName: Fenrir</p>
                </Row>
                <Row style={{ color: 'white', fontFamily: 'fantasy', fontSize: 20, marginTop: 30 }}>
                    <p>Name: John Doe</p>
                </Row>
                <Row style={{ color: 'white', fontFamily: 'fantasy', fontSize: 20, marginTop: 30 }}>
                    <p>Email: john.doe@example.com</p>
                </Row>
                <Row style={{ color: 'white', fontFamily: 'fantasy', fontSize: 20, marginTop: 30, maxWidth: 'none' }}>
                    <p>: Game developer and designer.</p>
                </Row>

            </Row>
            <Row className='BottomWebLinks' >
                <BottomWebLinks />
            </Row>

        </Container >

    );
}
export default Profile;