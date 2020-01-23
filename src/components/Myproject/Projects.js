import React from 'react';
import styles from './Projects.module.css'
import Myworks from "./Myworks";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.title}>
                <h2>My projects</h2>
            </div>
            <div className={styles.components}>
                <Myworks/>
                <Myworks/>
                <Myworks/>
            </div>
        </div>
    );
}

export default Projects;
