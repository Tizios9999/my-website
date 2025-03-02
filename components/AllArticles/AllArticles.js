import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import styles from "./AllArticles.module.scss";

import { useState, useEffect } from "react";

const AllArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);

  const [allTags, setAllTags] = useState([]);
  const [checkboxes, setCheckboxes] = useState([]);
  const [showTags, setShowTags] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "draft", // or 'draft'
        starts_with: "blog/",
        is_startpage: false,
      });

      setArticles((prev) =>
        data.stories.map((article) => {
          article.content.slug = article.slug;
          return article;
        })
      );
    };
    getArticles();
  }, []);

  useEffect(() => {
    const tagsSet = new Set();

    articles.map((article) => {
      article.tag_list.forEach((tag) => {
        tagsSet.add(tag);
      });
    });

    setAllTags(Array.from(tagsSet));
  }, [articles]);

  useEffect(() => {
    if (allTags) {
      const checkboxesArr = [];

      allTags.forEach((tag) => {
        const tagElement = {
          tagName: tag,
          active: false,
        };

        checkboxesArr.push(tagElement);
      });

      const sortedCheckboxes = checkboxesArr.sort((a, b) => {
        const tagA = a.tagName.toLowerCase();
        const tagB = b.tagName.toLowerCase();

        if (tagA < tagB) {
          return -1;
        }

        if (tagA > tagB) {
          return 1;
        }

        return 0;
      });

      setCheckboxes(sortedCheckboxes);
    }
  }, [allTags]);

  function toggleFilter(tagName) {
    const updatedTagFilters = checkboxes.map((tag) => {
      if (tag.tagName === tagName) {
        return { ...tag, active: !tag.active };
      } else {
        return tag;
      }
    });

    setCheckboxes(updatedTagFilters);
  }

  function applyFilter(tagName) {
    const updatedTagFilters = checkboxes.map((tag) => {
      if (tag.tagName === tagName) {
        return { ...tag, active: true };
      } else {
        return { ...tag, active: false };
      }
    });

    setCheckboxes(updatedTagFilters);
  }

  function removeFilters() {
    const updatedTagFilters = checkboxes.map((tag) => {
      if (tag.active) {
        return { ...tag, active: false };
      } else {
        return tag;
      }
    });

    setCheckboxes(updatedTagFilters);
  }

  function toggleShowTags() {
    setShowTags(!showTags);
  }

  // Filter articles based on active checkboxes
  const filteredArticles = articles.filter((article) => {
    return article.tag_list.some((tag) =>
      checkboxes.some((checkBox) => checkBox.active && checkBox.tagName === tag)
    );
  });

  return (
    //All articles in blog home page
    <>
      <div className={styles["title"]}>
        {/*<h1>{blok.title}</h1>*/}
        <h1>My Projects & Articles</h1>
      </div>
      <div className={styles["filter-title-container"]}>
        <div className={styles["filter-title"]} onClick={toggleShowTags}>
          Filter by tag
        </div>
      </div>
      {showTags && (
        <div className={styles["filters-section"]}>
          <div className={styles["tag"]} onClick={() => removeFilters()}>
            Remove filters
          </div>

          <div className={styles["tags-box"]}>
            {checkboxes.map((box, index) => {
              return (
                <div
                  key={index}
                  onClick={() => toggleFilter(box.tagName)}
                  className={`${styles["tag"]} ${
                    box.active && styles["active"]
                  }`}
                >
                  {box.tagName}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className={styles["container"]} {...storyblokEditable(blok)}>
        {articles[0] &&
          articles.map((article) => {
            const articleTags = article.tag_list.map((tag) =>
              tag.toLowerCase()
            );
            const activeTags = checkboxes
              .filter((tag) => tag.active)
              .map((tag) => tag.tagName.toLowerCase());

            if (
              activeTags.length === 0 ||
              activeTags.every((tag) => articleTags.includes(tag))
            ) {
              return (
                <ArticleTeaser
                  article={article.content}
                  tags={article.tag_list}
                  key={article.uuid}
                  onclick={applyFilter}
                />
              );
            }

            return null;
          })}
      </div>
    </>
  );
};

export default AllArticles;
