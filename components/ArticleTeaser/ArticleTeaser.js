import Link from "next/link";
import { render } from 'storyblok-rich-text-react-renderer';
import styles from './ArticleTeaser.module.scss';
 
const ArticleTeaser = ({ article, tags }) => {
return (
  <div>
  <div className={styles["card"]}>
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
        >
          Read More »
        </a>
      </Link>
      <div className={styles["tag-wrapper"]}>
      {tags.map((tag) => {
        return (
          <div className={styles["tag"]}>{tag}</div>
        )
      })}
      </div>
    </div>
  </div>
</div>
)
};
export default ArticleTeaser;