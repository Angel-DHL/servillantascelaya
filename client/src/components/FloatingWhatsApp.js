import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    return (
        <a 
            href="https://wa.me/524611203488" 
            className="floating-whatsapp" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
            <span className="whatsapp-tooltip">¡Chatea con nosotros!</span>
        </a>
    );
};

export default FloatingWhatsApp;
