import styles from './style.module.css';
import img1 from './img/img1.svg';
import img2 from './img/img2.svg';

export const Dignity = () => {
    return (
        <>
            <section className={styles.dignity}>
                <div className={styles.container}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.title}>
                            <h2>Сосредоточьтесь на мире, от 45 см до бесконечности</h2>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.img}>
                            <img src={img1} alt="Объектив" />
                        </div>
                        <div className={styles.text}>
                            <p>
                                Summilux-M 50 f/1,4 ASPH. позволяет снимать детальные крупные планы
                                благодаря двойному кулачковому механизму и минимальному расстоянию
                                фокусировки 45 сантиметров.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.dignity}>
                <div className={styles.container}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.title}>
                            <h2>Безупречная фотосъёмка</h2>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <p>
                                Summilux-M 50 f/1,4 ASPH. позволяет снимать детальные крупные планы
                                благодаря двойному кулачковому механизму и минимальному расстоянию
                                фокусировки 45 сантиметров.
                            </p>
                        </div>
                        <div className={styles.img}>
                            <img src={img2} alt="Объектив" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
