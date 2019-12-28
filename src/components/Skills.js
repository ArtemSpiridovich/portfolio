import React from 'react';
import styles from './Skills.module.css'
import Block from "./Block";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.view}>
            <div className={styles.title}>
                <h2>My skills</h2>
            </div>
            <div className={styles.blocks}>
                <Block/>
                <Block/>
                <Block/>
            </div>
        </div>
        </div>
    );
}

export default Skills;
