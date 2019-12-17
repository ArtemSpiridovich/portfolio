import React from 'react';
import styles from './Projects.module.css'
import Myworks from "./Myworks";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.title}>
                My projects
            </div>
            <div className={styles.components}>
                <Myworks/>
                <Myworks/>
            </div>
        </div>
    );
}

export default Projects;
