import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Dignity } from './components/dignity/Dignity';
import { Carousel } from './components/carousel/Carousel';

import img from '../src/components/camera_img.svg';
import styles from './components/header/style.module.css';

function App() {
    return (
        <>
            <div className={styles.main_wrapper}>
                <Header />
                <Hero />
            </div>
            <main>
                <Dignity />
                <div>
                    <img src={img} alt="Камера" />
                </div>
                <Carousel />
            </main>
        </>
    );
}

export default App;
