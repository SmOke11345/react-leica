import Header from '../components/Header/index';
import Hero from '../components/Hero/index';
import Dignity from '../components/Dignity/index';
import Carousel from '../components/Carousel/index';
import Form from '../components/Form/index';
import News from '../components/News/index';
import Footer from '../components/Footer/index';

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
