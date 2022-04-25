import Container from 'react-bootstrap/Container'
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MoviesPage from './pages/MoviesPage'
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
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Container>

    </div>
  );
}

export default App;
