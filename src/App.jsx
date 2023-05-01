import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Dignity } from './components/dignity/Dignity';
import { Carousel } from './components/carousel/Carousel';

import styles from './components/header/style.module.css';
import { Footer } from './components/footer/Footer';

function App() {
    return (
        <>
            <div className={styles.main_wrapper}>
                <Header />
                <Hero />
            </div>
            <main>
                <Dignity />
                <Carousel />
            </main>
            <Footer />
        </>
    );
}

export default App;
