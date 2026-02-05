import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Treasury from './components/Treasury/Treasury';
import GameTheory from './components/GameTheory/GameTheory';
import Docs from './components/Docs/Docs';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Stats />
                <Features />
                <HowItWorks />
                <Treasury />
                <GameTheory />
                <Docs />
                <Dashboard />
            </main>
            <Footer />
        </>
    );
}

export default App;
