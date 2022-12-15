import './assets/scss/styles.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';

import Footer from './components/home/Footer';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Admin />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )}

export default App;