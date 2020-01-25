import React from 'react';
import styles from './About.module.css'
import image from './foto.jpg'

function About() {
    return (
        <div className={styles.aboutbg}>
            <div className={styles.about}>
                <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis delectus eaque porro quae
                    quibusdam sapiente sequi suscipit totam ullam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis delectus eaque porro quae
                    quibusdam sapiente sequi suscipit totam ullam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis delectus eaque porro quae
                    quibusdam sapiente sequi suscipit totam ullam.
                </div>
                <div className={styles.photo}>
                    <img src={image}/>
            </div>
            </div>
        </div>
    );
}

export default About;
