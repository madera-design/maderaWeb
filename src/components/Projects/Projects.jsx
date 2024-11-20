import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/en/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.slider}>
        {projects.map((project, id) => (
          <div key={id} className={styles.slide}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};
