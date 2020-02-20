import React from 'react';
import styles from './Skills.module.css'
import Block from "./Block";
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)

function Skills() {
    return (
        <div className='skills'>
            <div className={styles.skills}>
                <div className={styles.view}>
                    <div className={styles.title}>
                        <h2>My skills</h2>
                    </div>
                    <div className={styles.blocks}>
                        <Block icon={['fab', 'html5']} title='HTML5' text='The correct use of block names with tags to create semantic layout. Using html to create any blocks on the site.'/>
                        <Block icon={['fab', 'css3']} title='CSS3' text='the use of CSS to style the site, also cross-browser layout, semantic layout, Material UI. Using a variety of libraries and animations.'/>
                        <Block icon={['fab', 'js-square']} title='JavaScript' text='Using JavaScript to write logic. Understanding the structure of the tree virtual DOM. knowledge of the principles of object-oriented programming.'/>
                        <Block icon={['fab', 'react']} title='React' text="Using the React.js library to write applications. FLUX Cycle, HOC, REST API, react-redux, AJAX, axios. Understanding the component life cycle and asynchronous queries and operations."/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
