import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import Header from './components/Header';
import New from './components/New';

function App() {
  return (
    <><Header title="Pokedex" />
    <main>
        <Routes>          
            <Route exact path="/pokedex" element={<Catalog />} />
            <Route exact path="/pokedex/detail/:id" element={<Detail />} />
            <Route exact path="/pokedex/new" element={<New />} />
            {/* only match this when no other routes match */}
            <Route path="/pokedex/*" element={<NotFound />} />
        </Routes>

    </main>
    <Footer />
    </>
  );
}

export default App;
