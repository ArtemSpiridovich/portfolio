import React, {Component} from 'react';
import styles from './Main.module.css'
import mainScreen from '../../assets/img/8i0F3poqddU.jpg'
import aboutScreen from '../../assets/img/-fNTY1sG0ls.jpg'
import skillScreen from '../../assets/img/hVPvBygjE-8.jpg'
import projectScreen from '../../assets/img/ulbxZl6w7wc.jpg'
import contactScreen from '../../assets/img/xU8Qo0YeIhI.jpg'
import {Link} from "react-scroll";

class BurgerMenu extends Component {

    render() {

        let classForNavbar = this.props.menuIsShow ? styles.navbaropen : styles.navbarclose;
        let classForBurger = this.props.menuIsShow ? styles.burgeropen : styles.burgerclose;

        return (
            <div className={classForBurger}>
                <ul className={classForNavbar}>
                    <li className={styles.home}>
                        <Link className={styles.homeImg} to='main' spy={true}
                              smooth={true}
                              duration={1000}>
                            {/*<img src={mainScreen}/>*/}
                        </Link>
                    </li>
                    <li className={styles.about}>
                        <Link className={styles.aboutImg} to='about' spy={true}
                              smooth={true}
                              offset={60}
                              duration={1000}>
                            {/*<img src={aboutScreen}/>*/}
                        </Link>
                    </li>
                    <li className={styles.skills}>
                        <Link className={styles.skillsImg} to='skills' spy={true}
                              smooth={true}
                              duration={1000}>
                            {/*<img src={skillScreen}/>*/}
                        </Link>
                    </li>
                    <li className={styles.projects}>
                        <Link className={styles.projectsImg} to='projects' spy={true}
                              smooth={true}
                              offset={80}
                              duration={1000}>
                            {/*<img src={projectScreen}/>*/}
                        </Link>
                    </li>
                    <li className={styles.contact}>
                        <Link className={styles.contactImg} to='test' spy={true}
                              smooth={true}
                              offset={-70}
                              duration={1000}>
                            {/*<img src={contactScreen}/>*/}
                        </Link>
                    </li>
                </ul>
                <div className={styles.menuClose} onClick={this.props.onButtonClickClose}>
                    ×
                </div>
            </div>
        );
    }
}

export default BurgerMenu;
