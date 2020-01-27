import React from 'react';
import styles from './About.module.css'
import image from './foto.jpg'

function About() {
    return (
        <div className={styles.aboutbg}>
            <div className={styles.about}>
                <div className={styles.text}>
                    <span className={styles.preName}>
                        Expert Front-end developer
                    </span>
                    <div className={styles.hover}>
                    <h3 className={styles.Name}>
                        About Me
                    </h3>
                    </div>
                    <span className={styles.aboutMe}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut culpa ducimus exercitationem, nemo neque placeat qui sed veniam. Dolorem dolores iure nihil nulla quas sunt temporibus vero! Ducimus.
                    </span>
                    <span className={styles.aboutMe}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut culpa ducimus exercitationem, nemo neque placeat qui sed veniam. Dolorem dolores iure nihil nulla quas sunt temporibus vero! Ducimus.
                    </span>
                    <a className={styles.button}>
                        Download CV
                    </a>
                </div>
                <div className={styles.photo}>
                    <img src={image}/>
            </div>
            </div>
        </div>
    );
}

export default About;
