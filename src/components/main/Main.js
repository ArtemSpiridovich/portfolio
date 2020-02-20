import React, {Component} from 'react';
import styles from './Main.module.css'
import {Link} from 'react-scroll'
import Fade from 'react-reveal/Fade';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import BurgerMenu from "./burgerMenu";


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
        return (
            <div className='main'>
                <div className={styles.menuOpen} onClick={this.onButtonClickOpen}>
                    <span></span><span></span><span></span>
                </div>
                <BurgerMenu menuIsShow={this.state.menuIsShow}
                            onButtonClickClose={this.onButtonClickClose}/>
                <div onClick={this.onButtonClickClose} className={styles.closeBurger}>

                </div>
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
                        <a href='https://github.com/ArtemSpiridovich' target='_blank'><FontAwesomeIcon
                            icon={['fab', 'github']} size='1x'/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
