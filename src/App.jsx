import { Header } from './components/header/Header';
import style from './components/header/style.module.css';
import { Hero } from './components/hero/Hero';

function App() {
    return (
        <>
            <div className={style.main_wrapper}>
                <Header />
                <Hero />
            </div>
        </>
    );
}

export default App;
