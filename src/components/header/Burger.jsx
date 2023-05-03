import React from 'react';
import styles from './style.module.css';
import burgerClose from './img/burger_close.svg';
import { RemoveScroll } from 'react-remove-scroll';

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
                            <a href="/#dignity" onClick={(event) => setIsOpen(!isOpen)}>
                                Преимущества
                            </a>
                        </div>
                        <div className={styles.nav__item}>
                            <a href="/#carousel" onClick={(event) => setIsOpen(!isOpen)}>
                                Галерея
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </RemoveScroll>
    );
};
