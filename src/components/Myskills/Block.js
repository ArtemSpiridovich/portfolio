import React from 'react';
import styles from './Block.module.css'

function Block() {
    return (
        <div className={styles.block}>
            <div className={styles.head}>
                <div className={styles.photo}>
                    <img src=''/>
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
