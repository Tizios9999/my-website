import { storyblokEditable } from "@storyblok/react";
import { useState } from 'react'
import styles from './Banner.module.scss';
import classNames from 'classnames';

const Banner = ({ blok }) => {

  const borderClasses = classNames(styles["neon-window"], styles["neon-border-lit"]);

  return ( 
        <section className={borderClasses}>
          <div {...storyblokEditable(blok)} className={styles["blok-container"]}>
              <h2 className={styles["intro"]}>{blok.intro}</h2>
              <h1 className={styles["my-name"]}>{blok.name}</h1>
              <h2 className={styles["my-title"]}>{blok.title}</h2>
          </div>
        </section>
        );
};
 
export default Banner;