"use client"
import React from "react";
import Image from 'next/image'; // Asegúrate de importar el componente Image de la biblioteca correcta
import styles from '../page.module.css';

// Importa las imágenes necesarias
import perfil_picture from './images/perfil_picture.jpeg';
import git from './icons/github.svg';
import twitter from './icons/twitter.svg';
import linkedin from './icons/linkedin.svg';
import youtube from './icons/youtube.svg';

function Perfil() {
    return (
        <div>
            <div className={styles.profile}>
                <figure className={styles.profileImage}>
                    <Image src={perfil_picture} alt="Foto de perfil" width={215} height={215} className={styles.profileImage} />
                </figure>
                <div className={styles.profileInfo}>
                    <h1>Victor Alvarado</h1>
                    <p>Software Engineer</p>
                    <div className={styles.profileSocial}>
                        <a href="https://github.com" target="_blank">
                            <Image src={git} alt="github" className={styles.profileSocialImg} />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <Image src={twitter} alt="twitter" className={styles.profileSocialImg} />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <Image src={linkedin} alt="linkedin" className={styles.profileSocialImg} />
                        </a>
                        <a href="https://youtube.com" target="_blank">
                            <Image src={youtube} alt="youtube" className={styles.profileSocialImg} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.facts}>
                <div className={styles.factItem}>
                    <h2>7</h2>
                    <p>Years of work experience</p>
                </div>
                <div className={styles.factItem}>
                    <h2>50+</h2>
                    <p>Completed projects</p>
                </div>
                <div className={styles.factItem}>
                    <h2>20+</h2>
                    <p>Satisfied customers</p>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
