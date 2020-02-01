import React from 'react';
import styles from './Footer.module.css'
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fab);

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.foot}>
                Artem Spirydovich
                <div className={styles.socialIcons}>
                    <a href='https://vk.com/artitsgood' target='_blank'><FontAwesomeIcon icon={['fab','vk']} size='2x' /></a>
                    <a href='https://t.me/artitsgood' target='_blank'><FontAwesomeIcon icon={['fab','telegram-plane']} size='2x' /></a>
                    <a href='https://www.facebook.com/profile.php?id=100043878231093&ref=bookmarks' target='_blank'><FontAwesomeIcon icon={['fab','facebook']} size='2x' /></a>
                    <a href='https://www.instagram.com/temich.art/?hl=ru' target='_blank'><FontAwesomeIcon icon={['fab','instagram']} size='2x' /></a>
                </div>
                <span>@2019 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
