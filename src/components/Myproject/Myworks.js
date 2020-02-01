import React from 'react';
import styles from './Myworks.module.css'

function Myworks(props) {
    return (
        <div className={styles.myworks}>
            {props.id === 0
                ? <div className={styles.textName1}>
                    <a href="https://github.com/ArtemSpiridovich/game-dog" target='_blank'>
                        <div className={styles.href1}>

                        </div>
                    </a>
                </div>
                : props.id === 1
                    ? <div className={styles.textName2}>
                        <a href="https://github.com/ArtemSpiridovich/social-network" target='_blank'>
                            <div className={styles.href2}>

                            </div>
                        </a>
                    </div>
                    : props.id === 2
                        ? <div className={styles.textName3}>
                            <a href="https://github.com/ArtemSpiridovich/Counter" target='_blank'>
                                <div className={styles.href3}>

                                </div>
                            </a>
                        </div>
                        : ''
            }
            {/*<div className={styles.head}>*/}
            {/*    <button>watch</button>*/}
            {/*</div>*/}
            {/*<div className={styles.body}>*/}
            {/*    <h2>Name project</h2>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut cum cupiditate debitis dicta dignissimos dolorem dolores in laboriosam maiores maxime necessitatibus, nostrum nulla numquam perspiciatis reiciendis sunt tempora voluptatibus?*/}
            {/*</div>*/}
        </div>
    );
}

export default Myworks;
