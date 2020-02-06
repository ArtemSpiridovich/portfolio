import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div id='contact' className={styles.allElements}>
            <div className={styles.contacts}>
                <div className={styles.textcontact}>
                    <div >
                        <h2>My Contacts</h2>
                        <span>If you want to contact me, write your message in the form on the right and send me an e-mail. I will definitely read everything!</span>
                    </div>
                    {/*<div className={styles.addressPhone}>*/}
                    <div >
                        <h3>Address</h3>
                        <span>2 Surganova, Minsk, Belarus</span>
                    </div>
                    <div >
                        <h3>Phone</h3>
                        <span>+375 (33) 303-30-14</span>
                    </div>
                {/*</div>*/}
                    <div>
                        <h3>Email</h3>
                        <span>artem.spirydovich@gmail.com</span>
                    </div>
                </div>
                <div className={styles.body}>
                    <h2 className='test'>Quick Contact Form</h2>
                    <form className={styles.form}
                          action="https://formspree.io/xknrjrzb"
                          method="POST">
                        <div className={styles.input1}><input autocomplete="off" type="text" name={'name'} placeholder='Your Name'/><input autocomplete="off" name={'email'} placeholder='Your email'/></div>
                        <div className={styles.input2}><input autocomplete="off" type="text" name={'phone'} placeholder='Your Phone'/><input autocomplete="off" name={'subject'} placeholder='Subject'/></div>
                        <textarea name={'message'} placeholder='Your message...'>

                        </textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
