import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.foot}>
                Ivan Ivanov
                <div className={styles.socialIcons}>
                    <a href=''>VK</a>
                    <a href=''>Insta</a>
                    <a href=''>Telegram</a>
                    <a href=''>Facebook</a>
                </div>
                <span>@2019 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
