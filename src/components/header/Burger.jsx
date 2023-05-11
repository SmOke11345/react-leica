import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { Link } from 'react-scroll';

import styles from './style.module.css';
import burgerClose from './img/burger_close.svg';

export const Burger = ({ isOpen, setIsOpen }) => {
    return (
        <RemoveScroll enabled={!!isOpen}>
            <div className={`${styles.overlay} ${isOpen ? `${styles.show}` : ''}`}>
                <img
                    src={burgerClose}
                    alt="burger_menu"
                    className={styles.burger}
                    onClick={(event) => {
                        setIsOpen(!isOpen);
                    }}
                />
                <div className={styles.content_wrapper}>
                    <nav className={styles.nav}>
                        <div className={styles.nav__item}>
                            <Link
                                to="dignity"
                                smooth={true}
                                offset={-50}
                                onClick={(event) => setIsOpen(!isOpen)}>
                                Преимущества
                            </Link>
                        </div>
                        <div className={styles.nav__item}>
                            <Link
                                to="carousel"
                                smooth={true}
                                offset={-50}
                                onClick={(event) => setIsOpen(!isOpen)}>
                                Галерея
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </RemoveScroll>
    );
};
