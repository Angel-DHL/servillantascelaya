import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaCar,
    FaTools,
    FaCog,
    FaOilCan,
    FaCheckCircle,
    FaWrench,
    FaTachometerAlt,
    FaShieldAlt
} from 'react-icons/fa';
import './Servicios.css';

const Servicios = () => {
    const serviciosData = [
        {
            id: 'llantas',
            icon: <FaCar />,
            title: 'Venta de Llantas',
            description: 'Amplio catálogo de llantas de las mejores marcas del mercado',
            features: [
                'Llantas para auto, camioneta y camión',
                'Marcas reconocidas: Michelin, Goodyear, Pirelli, Continental',
                'Asesoría personalizada',
                'Garantía de fábrica',
                'Instalación incluida',
                'Precios competitivos'
            ],
            image: '/images/servicios/llantas.jpg'
        },
        {
            id: 'alineacion',
            icon: <FaTachometerAlt />,
            title: 'Alineación y Balanceo',
            description: 'Equipos computarizados de última generación',
            features: [
                'Alineación computarizada',
                'Balanceo electrónico',
                'Rotación de llantas',
                'Diagnóstico completo de suspensión',
                'Corrección de ángulos',
                'Mayor durabilidad de llantas'
            ],
            image: '/images/servicios/alineacion.jpg'
        },
        {
            id: 'suspension',
            icon: <FaCog />,
            title: 'Suspensión',
            description: 'Reparación y mantenimiento integral del sistema de suspensión',
            features: [
                'Cambio de amortiguadores',
                'Reparación de brazos y terminales',
                'Cambio de balatas y bujes',
                'Inspección de rótulas',
                'Servicio de muelles',
                'Diagnóstico computarizado'
            ],
            image: '/images/servicios/suspension.jpg'
        },
        {
            id: 'frenos',
            icon: <FaShieldAlt />,
            title: 'Sistema de Frenos',
            description: 'Tu seguridad es nuestra prioridad',
            features: [
                'Cambio de balatas y pastillas',
                'Rectificación de discos y tambores',
                'Cambio de líquido de frenos',
                'Reparación de freno de mano',
                'Diagnóstico del sistema ABS',
                'Garantía en refacciones'
            ],
            image: '/images/servicios/frenos.jpg'
        },
        {
            id: 'aceite',
            icon: <FaOilCan />,
            title: 'Cambio de Aceite',
            description: 'Mantenimiento preventivo para alargar la vida de tu motor',
            features: [
                'Aceites sintéticos y minerales',
                'Cambio de filtro de aceite',
                'Revisión de niveles',
                'Lubricación de chasis',
                'Inspección de 25 puntos',
                'Registro de mantenimiento'
            ],
            image: '/images/servicios/aceite.jpg'
        },
        {
            id: 'mecanica',
            icon: <FaTools />,
            title: 'Mecánica General',
            description: 'Diagnóstico y reparación de cualquier falla mecánica',
            features: [
                'Diagnóstico computarizado',
                'Afinación mayor y menor',
                'Reparación de motor',
                'Sistema eléctrico',
                'Clutch y transmisión',
                'Sistema de enfriamiento'
            ],
            image: '/images/servicios/mecanica.jpg'
        }
    ];

    const whyChooseUs = [
        {
            icon: <FaCheckCircle />,
            title: 'Experiencia',
            text: 'Más de 15 años en el sector automotriz'
        },
        {
            icon: <FaWrench />,
            title: 'Equipos Modernos',
            text: 'Tecnología de punta para diagnóstico preciso'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Garantía',
            text: 'Respaldo en todos nuestros servicios'
        },
        {
            icon: <FaCog />,
            title: 'Calidad',
            text: 'Refacciones originales y de calidad'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Servicios Automotrices en Celaya | Servillantas Celaya</title>
                <meta name="description" content="Servicios de llantas, alineación, balanceo, suspensión, frenos y mecánica general en Celaya. Equipos computarizados y técnicos certificados. ¡Llama ya!" />
                <meta name="keywords" content="alineación celaya, balanceo celaya, suspensión celaya, frenos celaya, cambio de aceite celaya, mecánica celaya, llantas celaya" />
                <link rel="canonical" href="https://www.servillantascelaya.com.mx/servicios/" />
                <meta property="og:title" content="Servicios Automotrices Profesionales - Servillantas Celaya" />
                <meta property="og:description" content="Todos los servicios para tu vehículo: llantas, alineación, balanceo, suspensión, frenos y más." />
            </Helmet>

            {/* Hero Servicios */}
            <section className="servicios-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="servicios-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Nuestros Servicios</h1>
                        <p>Soluciones integrales para el mantenimiento y cuidado de tu vehículo</p>
                    </motion.div>
                </div>
            </section>

            {/* Servicios Detallados */}
            <section className="section servicios-detalle">
                <div className="container">
                    {serviciosData.map((servicio, index) => (
                        <motion.div
                            key={servicio.id}
                            id={servicio.id}
                            className={`servicio-item ${index % 2 === 0 ? '' : 'reverse'}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="servicio-image">
                                <img src={servicio.image} alt={servicio.title} />
                                <div className="servicio-icon-overlay">
                                    {servicio.icon}
                                </div>
                            </div>
                            <div className="servicio-content">
                                <h2>{servicio.title}</h2>
                                <p className="servicio-description">{servicio.description}</p>
                                <ul className="servicio-features">
                                    {servicio.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <FaCheckCircle />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contacto" className="btn btn-primary">
                                    Solicitar Cotización
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Por Qué Elegirnos */}
            <section className="section why-choose-section">
                <div className="container">
                    <div className="section-title">
                        <h2>¿Por Qué Elegirnos?</h2>
                        <p>Compromiso con la excelencia en cada servicio</p>
                    </div>
                    <div className="why-choose-grid">
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={index}
                                className="why-choose-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="why-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="servicios-cta">
                <div className="container">
                    <motion.div
                        className="cta-box"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>¿Listo para Darle Servicio a tu Vehículo?</h2>
                        <p>Contáctanos ahora y recibe atención personalizada</p>
                        <div className="cta-buttons">
                            <a href="tel:4611203488" className="btn btn-primary">
                                461 120 3488
                            </a>
                            <a href="tel:7201987926" className="btn btn-primary">
                                720 198 7926
                            </a>
                            <Link to="/contacto" className="btn btn-secondary">
                                Formulario de Contacto
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Servicios;