import React from 'react';
import styles from "../styles/Subsection.module.css";
import Image from 'next/image';
import img01 from "../images/001.png";
import img02 from "../images/002.png";
import img03 from "../images/003.png";
import img04 from "../images/004.png";
import img05 from "../images/005.png";

const Subsection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imagesCont}>
                <div className={styles.singleImg}>
                    <Image src={img01} alt={"image1"} className={styles.img} />
                </div>
                <div className={styles.singleImg}>
                    <Image src={img02} alt={"image2"} className={styles.img} />
                </div>
                <div className={styles.singleImg}>
                    <Image src={img03} alt={"image3"} className={styles.img} />
                </div>
                <div className={styles.singleImg}>
                    <Image src={img04}  alt={"image4"} className={styles.img} />
                </div>
                <div className={styles.singleImg}>
                    <Image src={img05} alt={"image5"} className={styles.img} />
                </div>
            </div>
        </div>
    )
}

export default Subsection
