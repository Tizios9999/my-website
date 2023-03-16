import { render } from 'storyblok-rich-text-react-renderer';
 
const Article = ({ blok }) => {
  return (
    <section >
      <div>
       
        <div >
          <h1 >
            {blok.title}
          </h1>
          <h1 >
            {blok.subtitle}
          </h1>
          <div>{render(blok.content)}</div>
        </div>
      </div>
    </section>
  );
};
export default Article;