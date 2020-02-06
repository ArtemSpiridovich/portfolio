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
                        <Block icon={['fab', 'html5']} title='HTML5' text='HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup-based pattern to it.

HTML5 was the fifth and last ma...'/>
                        <Block icon={['fab', 'css3']} title='CSS3' text='Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone...'/>
                        <Block icon={['fab', 'js-square']} title='JavaScript' text='JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, multi-paradigm programming language that conforms to the ECMAScript specification. JavaScript...'/>
                        <Block icon={['fab', 'react']} title='React' text='React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies...'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
