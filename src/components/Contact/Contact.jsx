import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contacto</h2>
                <p>¡No dudes en comunicarte!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:myemail@email.com">jesusjjpr@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/jesus-javier-palomares-ramirez-69442926b/">linkedin.com/Javier</a>
                </li>
                <li className={styles.link}>
                    <img 
                        src={getImageUrl("contact/githubIcon.png")} 
                        alt="Github Icon"
                    />
                    <a href="https://github.com/Palomas20">github.com/Palomas20</a>
                </li>
            </ul>
        </footer>
    );
};

