import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.allElements}>
            <div className={styles.contacts}>
                <div className={styles.textcontact}>
                    <div className='test'>
                        <h2>My Contacts</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ducimus eaque earum explicabo itaque, maxime mollitia qui velit voluptate. Alias animi ipsa itaque iure, molestiae odit quas soluta veritatis.</span>
                    </div>
                    <div className={styles.addressPhone}>
                    <div className={styles.Address}>
                        <h3>Address</h3>
                        <span>Belarus, Minsk, Surganova, 2</span>
                    </div>
                    <div className={styles.Phone}>
                        <h3>Phone</h3>
                        <span>+375 (33) 303-30-14</span>
                    </div>
                </div>
                    <div>
                        <h3>Email</h3>
                        <span>artem.spirydovich@gmail.com</span>
                    </div>
                </div>
                <div className={styles.body}>
                    <h2>Quick Contact Form</h2>
                    <form className={styles.form}>
                        <div className={styles.input1}><input type='text' placeholder='Your Name'/><input type='email' placeholder='Your email'/></div>
                        <div className={styles.input2}><input type='text' placeholder='Your Phone'/><input type='text' placeholder='Address'/></div>
                        <textarea placeholder='Your message...'></textarea>
                    </form>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
