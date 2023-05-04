import Link from "next/link";
import { render } from 'storyblok-rich-text-react-renderer';
import styles from './ArticleTeaser.module.scss';
import applyBorderStyle from "../../assets/js/applyBorderStyle";
import applyColorStyle from "../../assets/js/applyColorStyle";
 
const ArticleTeaser = ({ article, tags, onclick }) => {
return (
  <div>
  <div className={styles["card"]} style={applyBorderStyle(article.theme, 3, 12)}>
    <img className={styles["icon-img"]} src={article.image.filename}></img>
    <h1>
      {article.title}
    </h1>
    <div>
      {render(article.teaser)}
    </div>
    <div>
      <Link href={`/blog/${article.slug}`}>
        <a
          title="read more"
          style={applyColorStyle(article.theme)}
        >
          Read More »
        </a>
      </Link>
      <div className={styles["tag-wrapper"]}>
      {tags.map((tag, key) => {
        return (
          <div key={key} onClick={() => onclick(tag)} className={styles["tag"]} style={{backgroundColor: article.theme, cursor: "pointer"}}>{tag}</div>
        )
      })}
      </div>
    </div>
  </div>
</div>
)
};
export default ArticleTeaser;