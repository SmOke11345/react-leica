import img from './img/footer_logo.svg';
import styles from './style.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.logo}>
                            <img src={img} alt="logo" />
                        </div>
                    </div>
                    <div className={styles.content_wrapper}>
                        <nav className={styles.nav}>
                            <div className={styles.nav__title}>
                                <h3>Меню:</h3>
                            </div>
                            <div className={styles.nav__item}>
                                <a href="/#dignity">Преимущества</a>
                            </div>
                            <div className={styles.nav__item}>
                                <a href="/#carousel">Галерея</a>
                            </div>
                        </nav>
                    </div>
                    <div className={styles.content_wrapper}>
                        <p>соpyright © 2023 Artyom Lymar</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
