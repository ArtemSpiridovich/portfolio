import React from 'react';
import styles from './Projects.module.css'
import Myworks from "./Myworks";
import counterImg from './../../assets/img/Counter.jpg'
import socialImg from './../../assets/img/SocioalNetwork.jpg'
import dogImg from './../../assets/img/dogapp.jpg'

function Projects() {
    return (
        <div className='projects'>
            <div className={styles.projects}>
                <div className={styles.title}>
                    <h2>My projects</h2>
                </div>
                <div className={styles.components}>
                    <Myworks nameProject='Dog Game' background={dogImg} hrefToProps='https://artemspiridovich.github.io/game-dog/'/>
                    <Myworks nameProject='Social Network' background={socialImg} hrefToProps='https://github.com/ArtemSpiridovich/social-network'/>
                    <Myworks nameProject='Counter' background={counterImg} hrefToProps='https://github.com/ArtemSpiridovich/Counter'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
