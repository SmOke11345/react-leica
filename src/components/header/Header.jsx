import React from 'react';

import style from './style.module.css';
import logo from './img/logo.svg';
import burger from './img/burger.svg';

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
                    <div
                        className={style.burger}
                        onClick={(event) => {
                            setIsOpen(!isOpen);
                            console.log(isOpen);
                        }}>
                        <img src={burger} alt="burger_menu" />
                    </div>
                    <nav className={`${style.nav} ${isOpen ? '' : 'show'}`}>
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
