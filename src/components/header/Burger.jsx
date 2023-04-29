import React from 'react';
import ReactRemoveScroll from 'react-remove-scroll/dist/es2019/Combination';
import style from './style.module.css';
import burgerClose from './img/burger_close.svg';

export const Burger = ({ isOpen, setIsOpen }) => {
    return (
        <ReactRemoveScroll>
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
        </ReactRemoveScroll>
    );
};
