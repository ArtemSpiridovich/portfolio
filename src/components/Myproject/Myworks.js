import React from 'react';
import styles from './Myworks.module.css'

function Myworks(props) {
    return (
        <div className={styles.myworks}>
           <div style={{backgroundImage:`url(${props.background})`}} className={styles.textName}>
                    <a href={props.hrefToProps} target='_blank'>
                        <div className={styles.href}>
                            <div className={styles.nameProjects}>{props.nameProject}</div>
                        </div>
                    </a>
           </div>
        </div>
    );
}

export default Myworks;
