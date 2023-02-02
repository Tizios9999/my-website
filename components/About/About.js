import { storyblokEditable } from "@storyblok/react";
import styles from "./About.module.scss"
 
const About = ({ blok }) => {
  return <div {...storyblokEditable(blok)} className={styles["container"]}>
            <h1>{blok.title}</h1>
            <p>{blok.description}</p>
        </div>;
};
 
export default About;