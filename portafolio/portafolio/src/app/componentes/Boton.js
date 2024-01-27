"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import styles from '../page.module.css';
import downloadd from './icons/download.svg'; 

function Boton() {
    useEffect(() => {
        // Puedes agregar lógica adicional aquí que se ejecutará después de que el componente se monte
    }, []);

    const download = () => {
        alert("Downloading Document");
    };

    return (
        <div>
            <div className={styles.buttons}>
                <button className={styles.btnPrimary} onClick={download}>
                    <div className={styles.btnContent}>
                        <p>Download CV</p>
                        <Image src={downloadd} alt="Download" width={36} height={36} className={styles.btnPrimaryImg} />
                    </div>
                </button>
                <a className={styles.btnSecondary} href="mailto:contact@me.com">
                    <div className={styles.btnContent}>
                        <p>Contact me</p>
                    </div>
                </a>
            </div>

            <div className={styles.tabs}>
                <button className="tabsBackgroundItem active">
                    <p className={styles.tabsBackgroundItemText}>Portfolio</p>
                </button>
                <button className={styles.tabsBackgroundItem}>
                    <p className={styles.tabsBackgroundItemText}>Skills</p>
                </button>
            </div>
        </div>
    );
}

export default Boton;
