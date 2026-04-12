import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        {/* Columna 1: Info */}
                        <div className="footer-column">
                            <img src="/images/logo.png" alt="Servillantas Celaya" className="footer-logo" />
                            <p className="footer-description">
                                Expertos en servicio automotriz con más de 15 años de experiencia.
                                Comprometidos con la calidad y satisfacción de nuestros clientes.
                            </p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/profile.php?id=61586109131600" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.instagram.com/cservillantas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="https://wa.me/524611203488" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>

                        {/* Columna 2: Enlaces Rápidos */}
                        <div className="footer-column">
                            <h3>Enlaces Rápidos</h3>
                            <ul className="footer-links">
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/servicios">Servicios</Link></li>
                                <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contacto">Contacto</Link></li>
                            </ul>
                        </div>

                        {/* Columna 3: Servicios */}
                        <div className="footer-column">
                            <h3>Nuestros Servicios</h3>
                            <ul className="footer-links">
                                <li><Link to="/servicios#llantas">Venta de Llantas</Link></li>
                                <li><Link to="/servicios#alineacion">Alineación y Balanceo</Link></li>
                                <li><Link to="/servicios#suspension">Suspensión</Link></li>
                                <li><Link to="/servicios#frenos">Frenos</Link></li>
                                <li><Link to="/servicios#aceite">Cambio de Aceite</Link></li>
                            </ul>
                        </div>

                        {/* Columna 4: Contacto */}
                        <div className="footer-column">
                            <h3>Contacto</h3>
                            <ul className="footer-contact">
                                <li>
                                    <FaMapMarkerAlt />
                                    <span>Celaya, Guanajuato, México</span>
                                </li>
                                <li>
                                    <FaPhone />
                                    <div>
                                        <a href="tel:4611203488">461 120 3488</a>
                                        <a href="tel:7201987926">720 198 7926</a>
                                    </div>
                                </li>
                                <li>
                                    <FaEnvelope />
                                    <a href="mailto:cservillantas@gmail.com">
                                        cservillantas@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <FaClock />
                                    <div>
                                        <span>Lun - Vie: 9:00 AM - 6:00 PM<br></br></span>
                                        <span>Sáb: 9:00 AM - 2:00 PM</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} Servillantas Celaya. Todos los derechos reservados.</p>
                    <p className="developer-credit">
                        Desarrollado con ❤️ por <a href="https://www.developensolutions.com.mx" color='blue' style={{ color: 'yellow' }} target="_blank" rel="noopener noreferrer">Developen Solutions</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;