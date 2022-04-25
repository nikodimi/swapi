import Container from 'react-bootstrap/Container'
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage'
import PeoplesPage from './pages/PeoplesPage'
import NotFoundPage from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div className="App">
        <Navigation />

        <Container className='py-3'>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/films" element={<MoviesPage />} />
                <Route path="/people" element={<PeoplesPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Container>

    </div>
  );
}

export default App;
