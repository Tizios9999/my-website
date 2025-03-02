import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Section = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1>{blok.title}</h1>
      <img src={blok.image.filename} alt={blok.image.name} />
      <p>{blok.description}</p>
    </div>
  );
};

export default Section;
