import {
    Row, Col, Button,
    CardImgOverlay, CardBody, CardText, CardImg, Card, CardTitle, ButtonGroup,

    Container
} from 'react-bootstrap';
import { useRef, useState } from 'react';
import Celestial from '../image/Celestial Blade Chronicle.png';
import Blades from '../image/Blades Of The Spirit Realm.png';
import Tokyo from '../image/Tokyo Phase Tactics.png';
import Kingdom from '../image/Kingdoms Of The Silent Moon.png';
import Requiem from '../image/Requiem Of Broken Heroes.png'
import Back from '../image/Glitter_Particles_Motion_Background_04.gif';
import { RiArrowGoBackLine } from "react-icons/ri";
import { RiArrowTurnBackFill } from "react-icons/ri";
import { AiOutlineDollar } from "react-icons/ai";
import './GameList.css';

const GameCard = ({ image, title, description, isFlipped, isScrolling, onFlip, onScroll, firstText, secondText }) => (
    <Col xs={6} md={4} className='d-flex game-card-col'>
        <Container className='game-card-container h-100'>

            {isFlipped ? (


                <Card className={` h-100 Card ${isFlipped ? "switch" : ""}`} >
                    <CardImgOverlay className="d-flex  p-3">

                        <RiArrowGoBackLine onClick={onFlip} className="card-symbol game-card-back-symbol" />



                    </CardImgOverlay>
                    <CardImg id='startSwitch' variant="top" src={Back} className="game-card-back-image" />
                </Card>
            ) : (


                <Card id="Card" className={` h-80 d-flex flex-column Card ${isFlipped ? "switch" : ""}`}>


                    <RiArrowGoBackLine onClick={onFlip} className="card-symbol" />
                    <CardImg className={`card-img ${isFlipped ? "switch" : ""}`} src={image} />
                    <CardTitle id="CardTitle" className={`card-Title`}>{title}</CardTitle>
                    <CardBody id="CardBody" className={`d-flex flex-column ${isFlipped ? "switch" : ""}`}>
                        <CardText
                            id="CardText"
                            className={`card-text ${isScrolling ? "scrolling" : ""}`}
                            onScroll={onScroll}
                        >
                            {description}
                        </CardText>
                    </CardBody>
                    <ButtonGroup className='w-100 d-flex gap-2'>
                        <Button size="sm" className='flex-grow-1 game-card-action'>{firstText}</Button>
                        <Button size="sm" className='flex-grow-1 game-card-action'>{secondText}
                        </Button>
                    </ButtonGroup>
                </Card>


            )}
        </Container>
    </Col>
);

function GameList({ button1, button2 }) {
    const timeoutRef = useRef(null);
    const [cardFlips, setCardFlips] = useState([true, true, true, true, true]);
    const [isScrollingStates, setIsScrollingStates] = useState([false, false, false, false, false]);

    const gamesData = [
        {
            image: Celestial,
            title: "Celestial Blade Chronicle",
            description: "Cyclone has been in production of a new concept of how to take PacMan game style to the next level. We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not only adapt to your playing style but also learn from it making each game unique and exciting. To increase replayability no one playthrough of the game will be the same."
        },
        {
            image: Blades,
            title: "Blades Of The Spirit Realm",
            description: "Cyclone has been in production of a new concept of how to take PacMan game style to the next level. We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not only adapt to your playing style but also learn from it making each game unique and exciting. To increase replayability no one playthrough of the game will be the same."
        },
        {
            image: Tokyo,
            title: "Tokyo Phase Tactics",
            description: "Cyclone has been in production of a new concept of how to take PacMan game style to the next level. We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not only adapt to your playing style but also learn from it making each game unique and exciting. To increase replayability no one playthrough of the game will be the same."
        },
        {
            image: Requiem,
            title: "Requiem Of Broken Heroes",
            description: "Cyclone has been in production of a new concept of how to take PacMan game style to the next level. We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not only adapt to your playing style but also learn from it making each game unique and exciting. To increase replayability no one playthrough of the game will be the same."
        },
        {
            image: Kingdom,
            title: "Kingdoms Of The Silent Moon",
            description: "Cyclone has been in production of a new concept of how to take PacMan game style to the next level. We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not only adapt to your playing style but also learn from it making each game unique and exciting. To increase replayability no one playthrough of the game will be the same."
        }
    ];

    const handleFlip = (index) => {
        const newFlips = [...cardFlips];
        newFlips[index] = !newFlips[index];
        setCardFlips(newFlips);
    };

    const handleScroll = (index) => {
        const newStates = [...isScrollingStates];
        newStates[index] = true;
        setIsScrollingStates(newStates);

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            const resetStates = [...isScrollingStates];
            resetStates[index] = false;
            setIsScrollingStates(resetStates);
        }, 200);
    };

    return (
        <Card id="cardRow" className="rounded-5 flex-column">
            <Row><h1 id="GameTitle">Game List</h1></Row>
            <Row className="flex-nowrap" id="gameList">


                {gamesData.map((game, index) => (


                    <GameCard
                        key={index}
                        image={game.image}
                        title={game.title}
                        description={game.description}
                        isFlipped={cardFlips[index]}
                        isScrolling={isScrollingStates[index]}
                        onFlip={() => handleFlip(index)}
                        onScroll={() => handleScroll(index)}
                        firstText={button1}
                        secondText={button2}
                    />


                ))}
            </Row>
        </Card>
    );
}
export default GameList;