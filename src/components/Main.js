import React from 'react';
import styles from './Main.module.css'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.griting}>
                    <span>Привет</span>
                    <span>Меня зовут Иван Иванов</span>
                    <span>Я front-end разработчик</span>
                </div>
            </div>
        </div>
    );
}

export default Main;
