import { storyblokEditable } from "@storyblok/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';
import 'swiper/css';
 
const Slider = ({ blok }) => {

  return <div className={styles["blok-container"]} {...storyblokEditable(blok)}>
    <div className={styles["slider-container"]}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {console.log(blok.cards, "Cards")}
            {blok.cards.map((card) => {
              return (
                <SwiperSlide className={styles["card-container"]}>
                <div>
                    <h2>{card.title}</h2>
                    <div className={styles["img-wrapper"]}>
                        <img src={card.image.filename}></img>
                    </div>
                    <div className={styles["desc"]}><p>{card.description}</p></div>
                </div>
                </SwiperSlide>
            )
            })}
            
            </Swiper>
        </div>
    </div>
};
 
export default Slider;