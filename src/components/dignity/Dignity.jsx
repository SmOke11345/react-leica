import style from './style.module.css';
import img1 from './img/img1.svg';

export const Dignity = () => {
    return (
        <section className={style.dignity}>
            <div className={style.container}>
                <div className={style.content_wrapper}>
                    <div className={style.title}>
                        <h2>Сосредоточьтесь на мире, от 45 см до бесконечности</h2>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.img}>
                        <img src={img1} alt="Объектив" />
                    </div>
                    <div className={style.text}>
                        <p>
                            Summilux-M 50 f/1,4 ASPH. позволяет снимать детальные крупные планы
                            благодаря двойному кулачковому механизму и минимальному расстоянию
                            фокусировки 45 сантиметров.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
