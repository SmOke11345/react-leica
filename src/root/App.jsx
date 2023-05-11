import styles from './style.module.css';

import { News } from '../components/News/News';
import { Footer } from '../components/Footer/Footer';
import { Form } from '../components/Form/Form';
import { Carousel } from '../components/Carousel/Carousel';
import { Dignity } from '../components/Dignity/Dignity';
import { Hero } from '../components/Hero/Hero';
import { Header } from '../components/Header/Header';

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
