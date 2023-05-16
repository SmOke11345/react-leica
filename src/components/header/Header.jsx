import React, { useState } from 'react';
import { Burger } from './Burger';
import Links from '../Links';

import logo from './img/logo.svg';
import styles from './style.module.css';

const Header = () => {
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
                    <svg
                        className={styles.burger}
                        onClick={(event) => {
                            setIsOpen(!isOpen);
                        }}
                        width="70"
                        height="34"
                        viewBox="0 0 70 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.6665 3H66.6665"
                            stroke="#E73639"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M2.6665 17H45.3332"
                            stroke="#E73639"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M2.6665 31H23.9998"
                            stroke="#E73639"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
                    <nav className={styles.nav}>
                        <Links />
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
