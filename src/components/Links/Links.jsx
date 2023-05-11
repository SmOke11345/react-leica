import { Link } from 'react-scroll';
import styles from './style.module.css';

const Links = () => {
    return (
        <>
            <div className={styles.nav__item}>
                <Link to="dignity" smooth={true} offset={-50}>
                    Преимущества
                </Link>
            </div>
            <div className={styles.nav__item}>
                <Link to="carousel" smooth={true} offset={-50}>
                    Галерея
                </Link>
            </div>
        </>
    );
};
export default Links;
