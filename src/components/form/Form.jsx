import submitBtn from './img/submit_btn.svg';
import post from './img/post.svg';
import styles from './style.module.css';

const Form = () => {
    return (
        <section className={styles.form}>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <form action="#" className={styles.form_block}>
                        <div className={styles.wrapper}>
                            <div className={styles.content_wrapper}>
                                <img src={post} alt="" />
                            </div>
                            <div className={styles.content_wrapper}>
                                <div className={styles.title}>
                                    <h3>Новости Leica</h3>
                                </div>
                                <div className={styles.subtitle}>
                                    <p>Оставайтесь в курсе новостей Leica:</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content_wrapper}>
                            <label htmlFor="input">
                                <p>Ваша электронная почта</p>
                            </label>
                            <div className={styles.content_inner}>
                                <input type="email" id="input" placeholder="Leica@mail.ru" />
                                <label htmlFor="submit" className={styles.submit_btn}>
                                    <img src={submitBtn} alt="Отправить" />
                                </label>
                            </div>
                            <input type="submit" id="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Form;
