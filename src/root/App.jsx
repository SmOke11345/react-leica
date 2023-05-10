import Header from '../components/header';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Form from '../components/Form';
import News from '../components/News';
import Footer from '../components/Footer';

import styles from './style.module.css';
import Dignity from '../components/Dignity';

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
