import React from 'react';

import style from './style.module.css';
import logo from './img/logo.svg';
import burger from './img/burger.svg';
import { Burger } from './Burger';

export const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.content_wrapper}>
                    <div className={style.logo}>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                </div>
                <div className={style.content_wrapper}>
                    <img
                        src={burger}
                        alt="burger_menu"
                        className={style.burger}
                        onClick={(event) => {
                            setIsOpen(!isOpen);
                            console.log(isOpen);
                        }}
                    />
                    <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
                    <nav className={style.nav}>
                        <div className={style.nav__item}>
                            <a href="/">Преимущества</a>
                        </div>
                        <div className={style.nav__item}>
                            <a href="/">Галерея</a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
