import React from 'react';
import styles from "../styles/Header.module.css"
import Image from 'next/image';
import logo from "../images/weirddoctors_logo.png"
import logo1 from "../images/weirddoctors_logo.png"
function Header() {

  return (
    <div className={styles.container}>
      {/* <div className={styles.nav} >
        <Image src={logo} className={styles.img} />
      </div> */}
      <div className={styles.nav} >
        <Image src={logo1} alt={"logo"}className={styles.img} />
      </div>
    </div>
  )
}

export default Header
