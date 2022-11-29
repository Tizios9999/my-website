import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Grid = ({ blok }) => {
  // Here is the grid
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;