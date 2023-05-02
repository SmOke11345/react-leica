import { Header } from '../components/header/Header';
import { Hero } from '../components/hero/Hero';
import { Dignity } from '../components/dignity/Dignity';
import { Carousel } from '../components/carousel/Carousel';
import { Footer } from '../components/footer/Footer';
import { Form } from '../components/form/Form';
import { News } from '../components/news/News';

import styles from './style.module.css';

function App() {
    return (
        <>
            <div className={styles.main_wrapper}>
                <Header />
                <Hero />
            </div>
            <main>
                <Dignity />
                <div className={styles.background}>
                    <Carousel />
                    <Form />
                    <News />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
