import Link from "next/link";
import { render } from 'storyblok-rich-text-react-renderer';
import styles from './ArticleTeaser.module.scss';
 
const ArticleTeaser = ({ article }) => {
return (
  <div>
  <div className={styles["card"]}>
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
    </div>
  </div>
</div>
)
};
export default ArticleTeaser;