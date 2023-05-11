import Hero from '../components/Hero';
import Header from '../components/header';
import Dignity from '../components/dignity';
import Form from '../components/form';
import News from '../components/news';
import Footer from '../components/footer';
import Carousel from '../components/carousel';

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
