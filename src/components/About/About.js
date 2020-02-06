import React from 'react';
import styles from './About.module.css'
import image from '../../assets/img/MyPhoto.jpg'

function About() {
    return (
        <div className='about'>
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
                        Welcome to my portfolio site. My name is Artyom Spiridovich and I am a front-end developer.
                    </span>
                        <span className={styles.aboutMe}>
                         On my site you can find examples of my projects, as well as my skills in using the React.JS library. If you liked my work, contact me.
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
        </div>
    );
}

export default About;
