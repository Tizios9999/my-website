import { storyblokEditable } from "@storyblok/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectButton from './ProjectButton/ProjectButton';
import styles from './Slider.module.scss';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
 
const Slider = ({ blok }) => {

  return  <section className={styles["section-container"]}>
          <div className={styles["blok-container"]} {...storyblokEditable(blok)}>
          <h2>Most relevant Projects</h2>
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
                <div className={styles["custom-slide-container"]}>
                    <h3 className={styles["project-title"]}>{card.title}</h3>
                    <div className={styles["img-wrapper"]}>
                        <img src={card.image.filename}></img>
                    </div>
                    <div className={styles["desc"]}><p>{card.description}</p></div>
                    <div className={styles["technologies-desc"]}><p>TECHNOLOGIES HERE</p></div>
                    <div className={styles["project-buttons-wrapper"]}>
                      {card.liveLink.url && <ProjectButton link={card.liveLink.url} msg="See it Live" />}
                      {card.githubLink.url && <ProjectButton link={card.githubLink.url} msg="Check the code on Github" />}
                      {card.blogLink.url && <ProjectButton link={card.blogLink.url} msg="Read about it on my blog" />}
                      {/* <a href={card.live_link.url}><button>See it Live</button></a>
                      <a href="http://www.example.com"><button>Check the code on Github</button></a>
                      <a href="http://www.example.com"><button>Read about it on my blog</button></a> */}
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