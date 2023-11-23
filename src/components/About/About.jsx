import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Acerca de</h2>
            <div className={StyleSheet.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.abutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Administrador de Bases de Datos</h3>
                            <p>Me gusta administrar bases de datos, tengo experiencia en SiGob como
                                administrador de bases de datos.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Desarrollo Backend</h3>
                            <p>Tengo experiencia trabajando en la empresa en SiGob en desarrollador
                                backend.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>ejemplo</h3>
                            <p>ejemplo ejemplo ejemplo ejemplo</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};