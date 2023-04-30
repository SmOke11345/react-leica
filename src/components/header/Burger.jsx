import React from 'react';
import style from './style.module.css';
import burgerClose from './img/burger_close.svg';
import { RemoveScroll } from 'react-remove-scroll';

export const Burger = ({ isOpen, setIsOpen }) => {
    return (
        <RemoveScroll enabled={!!isOpen}>
            <div className={`${style.overlay} ${isOpen ? `${style.show}` : ''}`}>
                <img
                    src={burgerClose}
                    alt="burger_menu"
                    className={style.burger}
                    onClick={(event) => {
                        setIsOpen(!isOpen);
                    }}
                />
                <div className={style.content_wrapper}>
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
        </RemoveScroll>
    );
};
