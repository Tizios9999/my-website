import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import styles from './AllArticles.module.scss';
 
import { useState, useEffect } from "react";
 
const AllArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "draft", // or 'published'
        starts_with: 'blog/',
        is_startpage: false
      });
 
      setArticles((prev) => data.stories.map((article) => {
        article.content.slug = article.slug;
        return article;
      }));
    };
    getArticles();
}, []);
  return (
    //All articles in blog home page
    <>
      <div className={styles["title"]}>
      <h1>{blok.title}</h1>
      </div>
      <div className={styles["container"]}
        {...storyblokEditable(blok)}
      >
        { articles[0] && articles.map((article) => (
          <ArticleTeaser article={article.content} tags={article.tag_list} key={article.uuid} />
        ))}
      </div>
    </>
  );
};
export default AllArticles;