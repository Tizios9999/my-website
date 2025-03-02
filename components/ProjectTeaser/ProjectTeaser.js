import Link from "next/link";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import styles from "./ProjectTeaser.module.scss";
import applyBorderStyle from "../../assets/js/applyBorderStyle";
import applyColorStyle from "../../assets/js/applyColorStyle";

const ProjectTeaser = ({ article, tags, onclick }) => {
  return (
    <div>
      <div
        className={styles["card"]}
        style={applyBorderStyle(article.theme, 3, 12)}
      >
        <img className={styles["icon-img"]} src={article.image.filename} />
        <h1>{article.title}</h1>
        <div>{render(article.teaser)}</div>
        <div>
          <Link href={`/blog/${article.slug}`}>
            <a title="read more" style={applyColorStyle(article.theme)}>
              Blog article »
            </a>
          </Link>
          <div className={styles["tag-wrapper"]}>
            {tags
              .filter((tag) => tag.toLowerCase() !== "projects") // Escludi "Projects"
              .map((tag, key) => (
                <div
                  key={key}
                  onClick={() => onclick(tag)}
                  className={styles["tag"]}
                  style={{ backgroundColor: article.theme, cursor: "pointer" }}
                >
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectTeaser;
