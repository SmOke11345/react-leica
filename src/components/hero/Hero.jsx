import style from './style.module.css';

export const Hero = () => {
    return (
        <div className={style.container}>
            <div className={style.hero}>
                <div className={style.hero__title}>
                    <h1>Leica Summilux-M 50 f/1.4 ASPH.</h1>
                </div>
                <div className={style.hero__subtitle}>
                    <p>Новое поколение классических стандартных объективов</p>
                </div>
                <div className={style.btn}>
                    <a href="/">Подробнее</a>
                </div>
            </div>
        </div>
    );
};
