import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

export default function Slider() {
    return (
        <div className="slider">
        <Splide
            options={{
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 3000,
            arrows: true,
            pagination: true,
            }}
        >
            <SplideSlide>
            <img src={slide1} className='slide-image'/>
            </SplideSlide>

            <SplideSlide>
            <img src={slide2} className='slide-image'/>
            </SplideSlide>

            <SplideSlide>
            <img src={slide3} className='slide-image'/>
            </SplideSlide>
        </Splide>
        </div>
    );
}