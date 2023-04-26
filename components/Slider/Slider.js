import { storyblokEditable } from "@storyblok/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import applyBorderStyle from '../../assets/js/applyBorderStyle'
import applyDropShadowStyle from '../../assets/js/applyDropShadowStyle'
import applyButtonStyle from '../../assets/js/applyButtonStyle'
import LinkButton from './LinkButton/LinkButton';
import styles from './Slider.module.scss';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
 
const Slider = ({ blok }) => {


  function splitIntoBadges(elementsList, bgColor) {
    const arr = elementsList.split(", ");

    const badgesList = arr.map((element) => {
      return <div style={{backgroundColor: bgColor}} className={styles["badge"]}>{element}</div>
    });

    return <div className={styles["badges-list"]}>
      {badgesList}
    </div>
    }

  return  <section className={styles["section-container"]} id={"projects"}>
          <div className={styles["blok-container"]} {...storyblokEditable(blok)}>
          <h2 className={styles["section-title"]}>Most relevant Projects</h2>
          <div className={styles["swiper-container"]}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className={styles["sw-el"]}
          >
            {console.log(blok.cards, "Cards")}
            {blok.cards.map((card) => {
              return (
                <SwiperSlide className={styles["card-container"]}>
                    <div className={styles["custom-slide-container"]} style={applyBorderStyle(card.themeColor)}>
                    <div className={styles["card"]}>
                      <img src={card.image.filename} alt="Project Logo" style={applyDropShadowStyle(card.themeColor)}></img>
                      <h2>{card.title}</h2>
                      <h4>Technologies Used:</h4>
                      {splitIntoBadges(card.technologies, card.themeColor)}
                      <p>{card.description}</p>
                      <a href={card.blogLink.cached_url} className={styles["btn"]} style={applyButtonStyle(card.themeColor)} >View Project</a>
                    </div>

                  </div>
                </SwiperSlide>

            )
            })}
            
            </Swiper>
            </div>
        </div>
    </section>
};
 
export default Slider;