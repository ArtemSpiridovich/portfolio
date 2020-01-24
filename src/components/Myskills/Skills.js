import React from 'react';
import styles from './Skills.module.css'
import Block from "./Block";
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.view}>
                <div className={styles.title}>
                    <h2>My skills</h2>
                </div>
                <div className={styles.blocks}>
                    <Block icon={['fab','html5']} title='HTML5'/>
                    <Block icon={['fab','css3']} title='CSS3'/>
                    <Block icon={['fab','js-square']} title='JavaScript'/>
                    <Block icon={['fab','react']} title='React'/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
