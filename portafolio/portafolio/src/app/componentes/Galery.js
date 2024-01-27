import React from "react";
import Image from 'next/image';
import styles from '../page.module.css';

import hero from './images/Hero_2.png';

import bussines from './images/bussiness_man.png';
import wall from './images/pictures_wall.jpeg';
import kitchen from './images/kitchen.jpeg';
import mobile from './images/mobile_app.png';
import issima from './images/issima_page.png';
import link from './icons/link.svg';

function Galery() {
    return (
        <div>
            <div className={styles.projectc}>
                <div className={styles.contentCardImage}>
                    <Image className={styles.image} src={hero} width={360} height={360} alt="SmarterTrading411" />
                    <div className={styles.contentCardImageOverlay}></div>
                    <div className={styles.contentCardImageDetail}>
                        <p className={styles.title}>SmarterTrading411</p>
                        <p className={styles.detail}>Landing page of SmarterTrading411 created using WordPress</p>
                        <button className={styles.btn}>
                            <Image src={link} alt="youtube" width={36} height={36} />
                        </button>
                    </div>
                </div>

                <div className={styles.contentCardImage}>
                    <Image className={styles.image} src={bussines} width={36} height={36} alt="Business" />
                    <div className={styles.contentCardImageOverlay}></div>
                </div>

                <div className={styles.contentCardImage}>
                    <Image className={styles.image} src={wall} width={36} height={36} alt="Wall" />
                    <div className={styles.contentCardImageOverlay}></div>
                </div>

                <div className={styles.contentCardImage}>
                    <Image className={styles.image} src={kitchen} width={36} height={36} alt="Kitchen" />
                    <div className={styles.contentCardImageOverlay}></div>
                </div>

                <div className={styles.contentCardImage}>
                    <Image className={styles.image} src={mobile} width={36} height={36} alt="Mobile" />
                    <div className={styles.contentCardImageOverlay}></div>
                </div>

                <div className={styles.contentCardImage}>
                    <Image className={styles.image} src={issima} width={36} height={36} alt="Issima" />
                    <div className={styles.contentCardImageOverlay}></div>
                </div>
            </div>
        </div>
    );
}

export default Galery;
