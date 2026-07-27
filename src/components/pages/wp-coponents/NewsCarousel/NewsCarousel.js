import {
    Row, Col, Card,
    Carousel,
    CarouselItem,
    CarouselCaption,

} from 'react-bootstrap';
import MyImage from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/nooooodles-1337-3OdajQGd9sk-unsplash.jpg'
import MyImage2 from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/tim-mossholder-tq8Cuap8_wY-unsplash (1).jpg'
import MyImage3 from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/image/hongwei-fan-xUDobyOVM7Q-unsplash.jpg'

import './NewsCarousel.css';
function NewsCarousel() {
    return (<Card id='cardRow' className=" mainElement  ">

        <Carousel interval={1000} className="carousel" >
            <CarouselItem>
                <img
                    className="w-100  carousel-img"
                    src={MyImage}
                    alt="First slide"

                />
                <CarouselCaption style={{ textAlign: 'center', top: 50, inlineBlock: 'true', width: '50%' }}>
                    <h2 className='title' style={{ fontSize: 50 }}><b>Drop in and sneak your way to victorys</b></h2>
                    <p className='body' style={{ right: 100, width: '100%' }}>Join in on the new game Silent Soldier where you can croos game with your friends</p>

                </CarouselCaption>
            </CarouselItem>

            <CarouselItem>
                <img
                    className=" w-100 carousel-img"
                    src={MyImage2}
                    alt="Second slide"
                />
                <CarouselCaption style={{ textAlign: 'center', bottom: 20, inlineBlock: 'true', width: '50%' }}>
                    <h1 className='title' style={{ fontSize: '300%' }}><b>The Newest Anime game that you will ever own now power by AI </b></h1>
                    <p className='body'>With our new Ai we can make the power of anime come alive</p>
                </CarouselCaption>
            </CarouselItem>

            <CarouselItem>
                <img
                    className=" w-100 carousel-img"
                    src={MyImage3}
                    alt="Third slide"

                />
                <CarouselCaption style={{ textAlign: 'center', top: 50, inlineBlock: 'true', width: '50%' }}>
                    <h3 className='title' style={{ fontSize: '300%' }}><b> Apply now and see what is in store for you </b></h3>
                    <p className="body">Want to join the cylcone and help create amazing games</p>
                </CarouselCaption>
            </CarouselItem>
        </Carousel>

    </Card>
    );
}
export default NewsCarousel;