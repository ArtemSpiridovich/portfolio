import React from 'react';
import styles from './Skills.module.css'
import Block from "./Block";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.view}>
            <div className={styles.title}>
                <h3>My skills</h3>
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
