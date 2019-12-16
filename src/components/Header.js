import React from 'react';
import styles from './Header.module.css'
import Navbar from "./Navbar";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Navbar/>
            </div>
        </div>
    );
}

export default Header;
