import React from 'react';
import styles from './Block.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Block(props) {
    return (
        <div className={styles.block}>
            <div className={styles.head}>
                <div className={styles.photo} >
                    <FontAwesomeIcon icon={props.icon} size='7x'/>
                </div>
                <span>React</span>
            </div>
            <div className={styles.text}>
                this place for text!!!
            </div>
        </div>
    );
}

export default Block;
