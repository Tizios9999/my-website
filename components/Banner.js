import { storyblokEditable } from "@storyblok/react";
 
const Banner = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.title}</h2>;
};
 
export default Banner;