import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { path: '/', label: 'Inicio' },
        { path: '/servicios', label: 'Servicios' },
        { path: '/sobre-nosotros', label: 'Sobre Nosotros' },
        { path: '/blog', label: 'Blog' },
        { path: '/contacto', label: 'Contacto' }
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-content">
                        <div className="contact-info">
                            <a href="tel:4611203488" className="contact-item">
                                <FaPhone /> 461 120 3488
                            </a>
                            <a href="tel:7201987926" className="contact-item">
                                <FaPhone /> 720 198 7926
                            </a>
                            <a
                                href="https://wa.me/524611203488"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item whatsapp"
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                        <div className="horario">
                            Lun - Vie: 8:00 AM - 7:00 PM | Sáb: 8:00 AM - 5:00 PM
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <nav className="navbar">
                        <Link to="/" className="logo">
                            <img src="/images/logo.jpg" alt="Servillantas Celaya" />
                        </Link>

                        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                            {navItems.map((item) => (
                                <li key={item.path} className="nav-item">
                                    <Link
                                        to={item.path}
                                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="nav-cta">
                            <Link to="/contacto" className="btn btn-primary">
                                Cotiza Ahora
                            </Link>
                        </div>

                        <button className="hamburger" onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;