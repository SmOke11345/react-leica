import React from 'react';

import styles from './style.module.css';
import logo from './img/logo.svg';
import burger from './img/burger.svg';
import { Burger } from './Burger';

export const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

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
                        <div className={styles.nav__item}>
                            <a href="/">Преимущества</a>
                        </div>
                        <div className={styles.nav__item}>
                            <a href="/">Галерея</a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
