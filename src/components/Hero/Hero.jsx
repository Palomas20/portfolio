import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, soy Javier</h1>
            <p className={styles.description}>
                Soy un estudiante de Ingenieria de Desarrollo y Gestion de software.
                Me gusta programar en el lenguaje Python y administrar bases de datos.
            </p>
            <a href="mailto:jesusjjpr@gmail.com" className={styles.contactBtn}>Contactame</a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.png")} 
            alt="Hero Image of me" 
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};