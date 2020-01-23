import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.body}>
                <span>Contacts</span>
                <form className={styles.form}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button>send</button>
            </div>
        </div>
    );
}

export default Contacts;
