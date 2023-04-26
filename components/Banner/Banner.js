import { storyblokEditable } from "@storyblok/react";
import styles from './Banner.module.scss';
import classNames from 'classnames';
import { useRef } from 'react';

const Banner = ({ blok }) => {

  const scrollTest = (elId) => {
    
    // Seleziono l'elemento

    const element = document.getElementById(elId);

    // Scrollo verso l'elemento

    element.scrollIntoView({ behavior: "smooth" });

  }

  const borderClasses = classNames(styles["neon-window"], styles["neon-border-lit"]);
  const borderRef = useRef();

  return ( 
        <div className={styles["section-container"]} id={"home"} >
        <section ref={borderRef} className={borderClasses}>
          <div {...storyblokEditable(blok)} className={styles["blok-container"]}>
              <h2 className={styles["intro"]}>{blok.intro}</h2>
              <h1 className={styles["my-name"]}>{blok.name}</h1>
              <h2 className={styles["my-title"]}>{blok.title}</h2>
          </div>
          <button onClick={() => scrollTest("about")}>Scroll</button>
        </section>
        </div>
        );
};
 
export default Banner;