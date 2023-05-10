import React from 'react';
import { Burger } from './Burger';

import logo from './img/logo.svg';
import burger from './img/burger.svg';
import styles from './style.module.css';

const Header = () => {
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
                            <a href="/#dignity">Преимущества</a>
                        </div>
                        <div className={styles.nav__item}>
                            <a href="/#carousel">Галерея</a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
