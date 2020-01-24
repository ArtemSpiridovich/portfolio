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
                <h4 className={styles.name}>{props.title}</h4>
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi enim fugiat laboriosam ratione recusandae! Aliquid beatae est eveniet ex excepturi, explicabo facere iusto neque nostrum praesentium qui sequi voluptates voluptatibus.
            </div>
        </div>
    );
}

export default Block;
