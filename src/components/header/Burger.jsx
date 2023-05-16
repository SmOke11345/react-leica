import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { Link } from 'react-scroll';

import styles from './style.module.css';

export const Burger = ({ isOpen, setIsOpen }) => {
    return (
        <RemoveScroll enabled={!!isOpen}>
            <div className={`${styles.overlay} ${isOpen ? `${styles.show}` : ''}`}>
                <svg
                    className={styles.burger}
                    onClick={(event) => {
                        setIsOpen(!isOpen);
                    }}
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M44.6982 44.6985L14.9998 15"
                        stroke="#E73639"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M15.1509 44.8492L44.8494 15.1508"
                        stroke="#E73639"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />
                </svg>
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
