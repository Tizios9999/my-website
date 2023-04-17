import { storyblokEditable } from "@storyblok/react";
import styles from "./About.module.scss"
 
const About = ({ blok }) => {
  return <div {...storyblokEditable(blok)} className={styles["container"]}>
          <div className={styles["neon-border"]}>
            <h1>About me</h1>
            <h2>{blok.title}</h2>
            <p>{blok.description}</p>
            <a><button className={styles["btn"]}>More about me</button></a>
          </div>
        </div>
};
 
export default About;