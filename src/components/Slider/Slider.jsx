import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from './slides/agora_photo.jpg';
import slide2 from './slides/image_temp1.jpg';
import slide3 from './slides/portugues.jpg';
import slide4 from './slides/ufrn.jpg';
import './styles.css';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


export class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                {id: '1', image: slide1}, 
                {id: '2', image: slide2}, 
                {id: '3', image: slide3},
                {id: '4', image: slide4},
            ],
            textForSlide: props.textForSlide
         };
      }
    

    render() {
        return (
            <section id="container">
                <Swiper 
                    style={{
                        "--swiper-navigation-size": "4rem",
                        "--swiper-navigation-top-offset": "50%",
                        "--swiper-navigation-sides-offset": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "0.5rem"
                    }}
                    loop={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    slidesPerView={1} 
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {this.state.data.map( (item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt="Slider" className="slide-item"/>
                            <div className="overlayShadowForImages">
                                <h1>{this.props.title[item.id-1]}
                                    <p>{this.props.about[item.id-1]}</p>
                                </h1>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        );
    }
}