'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const MyCarousel = (props: any) => {
    
    return (
        <div>
            <Carousel
                autoPlay
                infiniteLoop
                emulateTouch
                autoFocus
                useKeyboardArrows
                centerSlidePercentage={80}
                swipeable
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                showThumbs={false}
                dynamicHeight={true}
                interval={2000}             
            >
                {props.children}
            </Carousel>
        </div>
    );
};

export default MyCarousel;


                