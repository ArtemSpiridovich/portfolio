import React from 'react';
import styles from './About.module.css'
import image from '../../assets/img/MyPhoto.jpg'
// import {pathToFile} from './mySummary.txt'

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
                        <a href='https://hh.ru/resume_converter/%D0%A1%D0%BF%D0%B8%D1%80%D0%B8%D0%B4%D0%BE%D0%B2%D0%B8%D1%87%20%D0%90%D1%80%D1%82%D0%B5%D0%BC%20%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87.doc?hash=fb995248ff079d3f400039ed1f4a3276733853&type=rtf&hhtmSource=user_resumes_list&hhtmFrom=user_resumes_list' className={styles.button}>
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
