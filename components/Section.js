import { storyblokEditable } from "@storyblok/react";
 
const Section = ({ blok }) => {
  return <div {...storyblokEditable(blok)}>
            <h1>{blok.title}</h1>
            <img src={blok.image.filename} alt={blok.image.name}></img>
            <p>{blok.description}</p>
        </div>;
};
 
export default Section;