import React from 'react';
import styles from './Main.module.css'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span className={styles.hello}>I am Artem Spirydovich</span>
                    <span className={styles.name}>front-end developer</span>
                    {/*<button className={styles.button}>Contact me</button>*/}
                </div>
            </div>
            <div className={styles.bgImg}></div>
        </div>
    );
}

export default Main;
