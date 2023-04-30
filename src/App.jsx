import { Header } from './components/header/Header';
import style from './components/header/style.module.css';
import { Hero } from './components/hero/Hero';
import { Dignity } from './components/dignity/Dignity';

function App() {
    return (
        <>
            <div className={style.main_wrapper}>
                <Header />
                <Hero />
            </div>
            <main>
                <Dignity />
            </main>
        </>
    );
}

export default App;
