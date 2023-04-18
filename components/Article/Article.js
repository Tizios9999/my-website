import { render } from 'storyblok-rich-text-react-renderer';
import styles from './Article.module.scss';
 
const Article = ({ blok }) => {
  return (
    <section className={styles["container"]}>
      <div className={styles["neon-border"]}>
       
        <div>
          <h1>
            {blok.title}
          </h1>
          <h1>
            {blok.subtitle}
          </h1>
          <div>{render(blok.content)}</div>
        </div>
      </div>
    </section>
  );
};
export default Article;