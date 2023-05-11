import img1 from './img/news_img2.svg';
import img2 from './img/news_img1.svg';

import styles from './style.module.css';

export const News = () => {
    const news = [
        {
            id: 0,
            name: {
                title: 'Черно-белая фотография Leica',
                subtitle: '#StoryInMonochrome',
            },
            img: img1,
            href: 'https://leica-camera.com/ru-RU/fotografiya/black-and-white',
        },
        {
            id: 1,
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
                    {news.map((obj) => (
                        <div className={styles.card_wrapper} key={obj.id}>
                            <div
                                className={styles.card}
                                style={{ background: `url(${obj.img}) no-repeat top center` }}>
                                <div className={styles.card_inner}>
                                    <div className={styles.card__title}>
                                        <h3>{obj.name.title}</h3>
                                    </div>
                                    <div className={styles.card__subtitle}>
                                        <p>{obj.name.subtitle}</p>
                                    </div>
                                    <div className={styles.card__btn}>
                                        <a href={obj.href}></a>
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
