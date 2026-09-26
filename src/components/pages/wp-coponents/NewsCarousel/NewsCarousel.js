import {
    Row, Col, Card,
    Carousel,
    CarouselItem,
    CarouselCaption,

} from 'react-bootstrap';
import MyImage from '../image/nooooodles-1337-3OdajQGd9sk-unsplash.jpg'
import MyImage2 from '../image/tim-mossholder-tq8Cuap8_wY-unsplash (1).jpg'
import MyImage3 from '../image/hongwei-fan-xUDobyOVM7Q-unsplash.jpg'

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
                <CarouselCaption className="news-carousel-caption news-carousel-caption-top">
                    <h2 className='title news-carousel-title news-carousel-title-first'><b>Drop in and sneak your way to victorys</b></h2>
                    <p className='body news-carousel-body'>Join in on the new game Silent Soldier where you can croos game with your friends</p>

                </CarouselCaption>
            </CarouselItem>

            <CarouselItem>
                <img
                    className=" w-100 carousel-img"
                    src={MyImage2}
                    alt="Second slide"
                />
                <CarouselCaption className="news-carousel-caption news-carousel-caption-bottom">
                    <h3 className='title news-carousel-title news-carousel-title-large'><b>The Newest Anime Game  </b></h3>
                    <p className='body news-carousel-body'>With our new Ai we can make the power of anime come alive</p>
                </CarouselCaption>
            </CarouselItem>

            <CarouselItem>
                <img
                    className=" w-100 carousel-img"
                    src={MyImage3}
                    alt="Third slide"

                />
                <CarouselCaption className="news-carousel-caption news-carousel-caption-top">
                    <h3 className='title news-carousel-title news-carousel-title-large'><b> Apply now and see what is in store for you </b></h3>
                    <p className="body news-carousel-body">Want to join the cylcone and help create amazing games</p>
                </CarouselCaption>
            </CarouselItem>
        </Carousel>

    </Card>
    );
}
export default NewsCarousel;