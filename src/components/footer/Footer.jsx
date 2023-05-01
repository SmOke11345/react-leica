import img from '../header/img/logo.svg';
import styles from './style.module.scss';
import React from 'react';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.logo}>
                            <img src={img} alt="logo" />
                        </div>
                        <nav className={styles.nav}>
                            <div className={styles.nav__item}>
                                <a href="/">Преимущества</a>
                            </div>
                            <div className={styles.nav__item}>
                                <a href="/">Галерея</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};
