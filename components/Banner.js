import { storyblokEditable } from "@storyblok/react";
 
const Banner = ({ blok }) => {
  return <div {...storyblokEditable(blok)}>
            <img src={blok.image.filename} alt={blok.image.name} ></img>
        </div>;
};
 
export default Banner;