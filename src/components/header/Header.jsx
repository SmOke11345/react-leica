import React, { useState } from 'react';
import { Burger } from './Burger';
import Links from '../Links';

import logo from './img/logo.svg';
import burger from './img/burger.svg';
import styles from './style.module.css';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.content_wrapper}>
                    <div className={styles.logo}>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                </div>
                <div className={styles.content_wrapper}>
                    <img
                        src={burger}
                        alt="burger_menu"
                        className={styles.burger}
                        onClick={(event) => {
                            setIsOpen(!isOpen);
                        }}
                    />
                    <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
                    <nav className={styles.nav}>
                        <Links />
                    </nav>
                </div>
            </div>
        </header>
    );
};
