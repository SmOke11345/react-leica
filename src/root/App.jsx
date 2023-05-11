import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Dignity from '../components/Dignity/Dignity';
import Carousel from '../components/Carousel/Carousel';
import Form from '../components/Form/Form';
import News from '../components/News/News';
import Footer from '../components/Footer/Footer';

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
