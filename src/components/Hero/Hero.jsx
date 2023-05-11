import { Link } from 'react-scroll';

import styles from './style.module.css';

export const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.hero__title}>
                    <h1>Leica Summilux-M 50 f/1.4 ASPH.</h1>
                </div>
                <div className={styles.hero__subtitle}>
                    <p>Новое поколение классических стандартных объективов</p>
                </div>
                <div className={styles.btn}>
                    <Link to="carousel" smooth={true} duration={2750} offset={-800}>
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
};

