import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LeadPopup from './components/LeadPopup';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import SobreNosotros from './pages/SobreNosotros';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import AdminAuth from './pages/AdminAuth';
import AdminDashboard from './pages/AdminDashboard';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

const App = () => {
    // Visit tracking
    useEffect(() => {
        const trackVisit = async () => {
            const hasSentVisit = sessionStorage.getItem('visitTracked');
            if (!hasSentVisit) {
                try {
                    await fetch('http://localhost:5000/api/metrics/visit', { method: 'POST' });
                    sessionStorage.setItem('visitTracked', 'true');
                } catch (err) {
                    console.error("No se pudo registrar la visita:", err);
                }
            }
        };
        trackVisit();
    }, []);

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
                            <Route path="/admin" element={<AdminAuth />} />
                            <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        </Routes>
                        <FloatingWhatsApp />
                        <LeadPopup />
                    </main>
                    <Footer />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;