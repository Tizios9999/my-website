import { render } from 'storyblok-rich-text-react-renderer';
import styles from './Article.module.scss';
import applyBorderStyle from '../../assets/js/applyBorderStyle';
 
const Article = ({ blok }) => {
  return (
    <section className={styles["container"]}>
      <div className={styles["neon-border"]} style={{
        border: `12px solid ${Article.theme}`
      }}>
       
        <div className={styles["article"]}>
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