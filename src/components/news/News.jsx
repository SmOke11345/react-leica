import img1 from './img/news_img2.svg';
import img2 from './img/news_img1.svg';

import styles from './style.module.css';

export const News = () => {
    const news = [
        {
            name: {
                title: 'Черно-белая фотография Leica',
                subtitle: '#StoryInMonochrome',
            },
            img: img1,
            href: 'https://leica-camera.com/ru-RU/fotografiya/black-and-white',
        },
        {
            name: {
                title: 'М-Объективы',
                subtitle: 'Властелины мгновений',
            },
            img: img2,
            href: 'https://leica-camera.com/ru-RU/fotografiya/obektivy/m',
        },
    ];

    return (
        <section className={styles.news}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {news.map((item, index) => (
                        <div className={styles.card_wrapper}>
                            <div
                                className={styles.card}
                                style={{ background: `url(${item.img}) no-repeat top center` }}
                            >
                                <div className={styles.card_inner} key={index}>
                                    <div className={styles.card__title}>
                                        <h3>{item.name.title}</h3>
                                    </div>
                                    <div className={styles.card__subtitle}>
                                        <p>{item.name.subtitle}</p>
                                    </div>
                                    <div className={styles.card__btn}>
                                        <a href={item.href}></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
