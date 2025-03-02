import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser"; // Oppure ProjectTeaser se vuoi personalizzarlo
import styles from "./AllProjects.module.scss";

const AllProjects = ({ blok }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get("cdn/stories", {
        version: "draft",
        starts_with: "blog/",
        is_startpage: false,
      });

      // Filtra gli articoli che hanno il tag "project" o simili
      const filteredProjects = data.stories.filter(
        (article) => article.tag_list.includes("Projects") // Modifica con il tag corretto
      );

      setProjects(
        filteredProjects.map((project) => ({
          ...project,
          content: { ...project.content, slug: project.slug },
        }))
      );
    };

    getProjects();
  }, []);

  return (
    <div className={styles["container"]} {...storyblokEditable(blok)}>
      <h2>My Projects</h2>
      <div className={styles["projects-grid"]}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ArticleTeaser
              key={project.uuid}
              article={project.content}
              tags={project.tag_list}
              onclick={() => {}}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
