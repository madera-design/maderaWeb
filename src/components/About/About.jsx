import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Acerca de mí</h2>
      <div className={styles.content}>
        <div className={styles.contentImg}>
        <img
          src={getImageUrl("about/yo.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <a download="" href="src/documents/JAMGCV.pdf" className={styles.contactBtn}>
            Descargar CV
          </a>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollo Frontend</h3>
              <p>
                Soy un desarrollador frontend con experiencia en la creación de sitios web responsive y optimizados para un rendimiento superior.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Arquitectura</h3>
              <p>
                Tengo experiencia en el desarrollo de sistemas utilizando arquitectura hexagonal, lo que permite una mayor escalabilidad y flexibilidad.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Diseño UX/UI</h3>
              <p>
                He diseñado múltiples sitios y sistemas web adaptados a diversas industrias y necesidades del mercado.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
