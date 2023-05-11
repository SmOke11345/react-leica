import Header from '../components/header';
import Hero from '../components/hero';
import Dignity from '../components/dignity';
import Carousel from '../components/carousel';
import Form from '../components/form';
import News from '../components/news';
import Footer from '../components/footer';

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
