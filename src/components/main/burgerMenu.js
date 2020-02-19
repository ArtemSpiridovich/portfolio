import React, {Component} from 'react';
import styles from './Main.module.css'
import {Link} from "react-scroll";

class BurgerMenu extends Component {

    render() {

        let classForNavbar = this.props.menuIsShow ? styles.navbaropen : styles.navbarclose;
        let classForBurger = this.props.menuIsShow ? styles.burgeropen : styles.burgerclose;

        return (
            <div className={classForBurger}>
                <ul className={classForNavbar}>
                    <div className={styles.homeHover}>
                        <li className={styles.home}>
                            <Link className={styles.homeImg} to='main' spy={true}
                                  smooth={true}
                                  duration={1000}>
                            </Link>
                        </li>
                    </div>
                    <div className={styles.aboutHover}>
                        <li className={styles.about}>
                            <Link className={styles.aboutImg} to='about' spy={true}
                                  smooth={true}
                                  offset={60}
                                  duration={1000}>
                            </Link>
                        </li>
                    </div>
                    <div className={styles.skillsHover}>
                        <li className={styles.skills}>
                            <Link className={styles.skillsImg} to='skills' spy={true}
                                  smooth={true}
                                  duration={1000}>
                            </Link>
                        </li>
                    </div>
                    <div className={styles.projectsHover}>
                        <li className={styles.projects}>
                            <Link className={styles.projectsImg} to='projects' spy={true}
                                  smooth={true}
                                  offset={80}
                                  duration={1000}>
                            </Link>
                        </li>
                    </div>
                    <div className={styles.contactHover}>
                        <li className={styles.contact}>
                            <Link className={styles.contactImg} to='test' spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={1000}>
                            </Link>
                        </li>
                    </div>
                </ul>
                <div className={styles.menuClose} onClick={this.props.onButtonClickClose}>
                    ×
                </div>
            </div>
        );
    }
}

export default BurgerMenu;
