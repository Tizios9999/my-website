import { storyblokEditable } from "@storyblok/react";
 
const About = ({ blok }) => {
  return <div {...storyblokEditable(blok)}>
            <h1>{blok.title}</h1>
            <p>{blok.description}</p>
        </div>;
};
 
export default About;