import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.allElements}>
            <div className={styles.contacts}>
                <div className={styles.textcontact}>
                    <div>
                        <h2>My Contacts</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi ducimus eaque earum explicabo itaque, maxime mollitia qui velit voluptate. Alias animi ipsa itaque iure, molestiae odit quas soluta veritatis.</span>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cumque debitis dignissimos et iusto laboriosam quibusdam sint? Assumend...</span>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquam consequatur corporis ...</span>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                </div>
                <div className={styles.body}>
                    <h2>Quick Contact Form</h2>
                    <form className={styles.form}>
                        <div className={styles.input1}><input/><input/></div>
                        <div className={styles.input2}><input/><input/></div>
                        <textarea></textarea>
                    </form>
                    <button>send</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
