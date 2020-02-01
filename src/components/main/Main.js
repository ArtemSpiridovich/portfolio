import React from 'react';
import styles from './Main.module.css'
import {Link} from 'react-scroll'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span className={styles.hello}>I am Artem Spirydovich</span>
                    <span className={styles.name}>front-end developer</span>
                    <Link to='test' spy={true}
                          smooth={true}
                          offset={-70}
                          duration={1000} className={styles.button}>Contact me</Link>
                </div>
            </div>
            <div className={styles.bgImg}></div>
        </div>
    );
}

export default Main;
