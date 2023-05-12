import { render } from 'storyblok-rich-text-react-renderer';
import styles from './Article.module.scss';
import Image from "next/image";
import applyBorderStyle from '../../assets/js/applyBorderStyle';
 
const Article = ({ blok }) => {

  return (
    <section className={styles["container"]}>
      
      <div className={styles["neon-border"]} style={applyBorderStyle(blok.theme, 12, 2)}>
       
        <div className={styles["article"]}>
        <Image className={styles["icon-img"]} src={blok.image.filename}/>
          <h1>
            {blok.title}
          </h1>
          <h2>
            {blok.subtitle}
          </h2>
          <div>{render(blok.content)}</div>
        </div>
      </div>
    </section>
  );
};
export default Article;