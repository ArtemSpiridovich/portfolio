import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.foot}>
                Artem Spirydovich
                <div className={styles.socialIcons}>
                    <a href=''></a>
                    <a href=''></a>
                    <a href=''></a>
                    <a href=''></a>
                </div>
                <span>@2019 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
