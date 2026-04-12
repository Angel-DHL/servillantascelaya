import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import SobreNosotros from './pages/SobreNosotros';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <div className="App">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/servicios" element={<Servicios />} />
                            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/contacto" element={<Contacto />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;