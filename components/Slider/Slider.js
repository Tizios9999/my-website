import { storyblokEditable } from "@storyblok/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';
import 'swiper/css';
 
const Slider = ({ blok }) => {

  return <div {...storyblokEditable(blok)}>
    <div className={styles["container"]}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {console.log(blok.cards, "Cards")}
            {blok.cards.map((card) => {
              return (
                <SwiperSlide>
                <div>
                    <h2>{card.title}</h2>
                    <div className={styles["img-wrapper"]}>
                        <img src={card.image.filename}></img>
                    </div>
                    <p>{card.description}</p>
                </div>
                </SwiperSlide>
            )
            })}
            
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    </div>
};
 
export default Slider;