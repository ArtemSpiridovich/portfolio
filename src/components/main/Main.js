import React, {Component} from 'react';
import styles from './Main.module.css'
import {Link} from 'react-scroll'
import Fade from 'react-reveal/Fade';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(fab);

class Main extends Component {
    state = {
        menuIsShow: false
    }

    onButtonClickOpen = () => {
        this.setState({
            menuIsShow: true
        })
    }

    onButtonClickClose = () => {
        this.setState({
            menuIsShow: false
        })
    }

    render() {

        let classForNavbar = this.state.menuIsShow ? styles.navbaropen : styles.navbarclose;

        return (
            <div>
                <div className={styles.menuOpen} onClick={this.onButtonClickOpen}>
                <span>

                </span>
                    <span>

                </span>
                    <span>

                </span>
                </div>
                <ul className={classForNavbar}>
                    <li className={styles.home}>
                        <a href="#home">
                            <img src=''/>
                        </a>
                    </li>
                    <li className={styles.about}>
                        <a href="#about">
                            <img src=''/>
                        </a>
                    </li>
                    <li className={styles.skills}>
                        <a href="#skills">
                            <img src=''/>
                        </a>
                    </li>
                    <li className={styles.projects}>
                        <a href="#projects">
                            <img src=''/>
                        </a>
                    </li>
                    <li className={styles.contact}>
                        <a href="#contact">
                            <img src=''/>
                        </a>
                    </li>
                    <div className={styles.menuClose} onClick={this.onButtonClickClose}>
                        ×
                    </div>
                </ul>
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.greeting}>
                            <Fade left cascade>
                                <span className={styles.hello}>I am Artem Spirydovich</span>
                                <span className={styles.name}>front-end developer</span>
                                <Link to='test' spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={1000} className={styles.button}>Contact me</Link>
                            </Fade>
                        </div>
                    </div>
                    <div className={styles.bgImg}/>
                    <div className={styles.socialLinks}>
                        <a href='https://vk.com/artitsgood' target='_blank'><FontAwesomeIcon icon={['fab', 'vk']}
                                                                                             size='1x'/></a>
                        <a href='https://t.me/artitsgood' target='_blank'><FontAwesomeIcon
                            icon={['fab', 'telegram-plane']}
                            size='1x'/></a>
                        <a href='https://www.instagram.com/temich.art/?hl=ru' target='_blank'><FontAwesomeIcon
                            icon={['fab', 'instagram']} size='1x'/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
