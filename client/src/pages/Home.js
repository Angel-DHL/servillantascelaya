import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    FaCar,
    FaTools,
    FaCheckCircle,
    FaClock,
    FaAward,
    FaUsers,
    FaPhone
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const services = [
        {
            icon: <FaCar />,
            title: 'Venta de Llantas',
            description: 'Las mejores marcas del mercado con garantía y calidad certificada'
        },
        {
            icon: <FaTools />,
            title: 'Alineación y Balanceo',
            description: 'Equipos de última generación para el mejor desempeño de tu vehículo'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Suspensión',
            description: 'Diagnóstico y reparación completa de sistemas de suspensión'
        },
        {
            icon: <FaCar />,
            title: 'Sistema de Frenos',
            description: 'Tu seguridad es primero. Mantenimiento y reparación de frenos'
        }
    ];

    const testimonials = [
        {
            name: 'Juan Pérez',
            image: '/images/usuarios/usuario1.png',
            text: 'Excelente servicio y atención. Las llantas que compré son de gran calidad y el servicio de alineación fue impecable.',
            rating: 5
        },
        {
            name: 'María García',
            image: '/images/usuarios/usuario2.png',
            text: 'Muy profesionales. Me explicaron todo el proceso de reparación de mi suspensión y los precios son muy justos.',
            rating: 5
        },
        {
            name: 'Ricardo Torres',
            image: '/images/usuarios/usuario3.png',
            text: 'El mejor lugar en Celaya para el mantenimiento de tu auto. Rápidos, honestos y con tecnología de punta.',
            rating: 5
        },
        {
            name: 'Laura Sánchez',
            image: '/images/usuarios/usuario4.png',
            text: 'Increíble atención al cliente. Me ayudaron a elegir las mejores llantas para mi camioneta según mi presupuesto.',
            rating: 5
        },
        {
            name: 'Miguel Hernández',
            image: '/images/usuarios/usuario5.png',
            text: 'Servicio de frenos rápido y seguro. Siento mi coche mucho mejor al conducir. ¡Totalmente recomendados!',
            rating: 5
        },
        {
            name: 'Ana Martínez',
            image: '/images/usuarios/usuario6.png',
            text: 'Llevo años trayendo mis vehículos aquí y nunca me han fallado. La garantía que ofrecen da mucha tranquilidad.',
            rating: 5
        }
    ];

    const features = [
        { icon: <FaClock />, title: '15+ Años', text: 'De Experiencia' },
        { icon: <FaAward />, title: 'Garantía', text: 'En Todos los Servicios' },
        { icon: <FaUsers />, title: '5000+', text: 'Clientes Satisfechos' },
        { icon: <FaTools />, title: 'Equipos', text: 'De Última Tecnología' }
    ];

    return (
        <>
            <Helmet>
                <title>Servillantas Celaya - Expertos en Servicio Automotriz | Llantas, Alineación y Balanceo</title>
                <meta name="description" content="Servillantas Celaya ofrece venta de llantas, alineación, balanceo, suspensión y frenos. Más de 15 años de experiencia en Celaya, Guanajuato. ¡Llama al 461 120 3488!" />
                <meta name="keywords" content="llantas celaya, alineación y balanceo celaya, taller mecánico celaya, suspensión celaya, frenos celaya, servicio automotriz" />
                <link rel="canonical" href="https://www.servillantascelaya.com.mx/" />
                <meta property="og:title" content="Servillantas Celaya - Expertos en Servicio Automotriz" />
                <meta property="og:description" content="Venta de llantas, alineación, balanceo y más. Servicio profesional en Celaya, Guanajuato." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.servillantascelaya.com.mx/" />
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Expertos en Servicio Automotriz</h1>
                        <p>Más de 15 años brindando soluciones integrales para tu vehículo en Celaya</p>
                        <div className="hero-buttons">
                            <Link to="/contacto" className="btn btn-primary">
                                Cotiza Ahora
                            </Link>
                            <Link to="/servicios" className="btn btn-secondary">
                                Ver Servicios
                            </Link>
                        </div>
                        <div className="hero-phones">
                            <a href="tel:4611203488" className="phone-badge">
                                <FaPhone /> 461 120 3488
                            </a>
                            <a href="tel:7201987926" className="phone-badge">
                                <FaPhone /> 720 198 7926
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section services-preview">
                <div className="container">
                    <div className="section-title">
                        <h2>Nuestros Servicios</h2>
                        <p>Soluciones completas para el mantenimiento y cuidado de tu vehículo</p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="section-cta">
                        <Link to="/servicios" className="btn btn-primary">
                            Ver Todos los Servicios
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Lo Que Dicen Nuestros Clientes</h2>
                        <p>Nuestra mayor satisfacción es tu seguridad y confianza</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="testimonial-header">
                                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                                    <div className="testimonial-info">
                                        <h3>{testimonial.name}</h3>
                                        <div className="rating">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaAward key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>¿Necesitas Atención Inmediata?</h2>
                        <p>Contáctanos ahora y recibe atención personalizada de nuestros expertos</p>
                        <div className="cta-buttons">
                            <a href="tel:4611203488" className="btn btn-primary">
                                <FaPhone /> Llamar Ahora
                            </a>
                            <a
                                href="https://wa.me/524611203488"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="section trust-section">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-content">
                            <h2>¿Por Qué Elegirnos?</h2>
                            <ul className="trust-list">
                                <li>
                                    <FaCheckCircle />
                                    <span>Técnicos certificados y capacitados</span>
                                </li>
                                <li>
                                    <FaCheckCircle />
                                    <span>Equipos de última tecnología</span>
                                </li>
                                <li>
                                    <FaCheckCircle />
                                    <span>Garantía en todos nuestros servicios</span>
                                </li>
                                <li>
                                    <FaCheckCircle />
                                    <span>Precios competitivos</span>
                                </li>
                                <li>
                                    <FaCheckCircle />
                                    <span>Atención personalizada</span>
                                </li>
                                <li>
                                    <FaCheckCircle />
                                    <span>Más de 15 años de experiencia</span>
                                </li>
                            </ul>
                            <Link to="/sobre-nosotros" className="btn btn-secondary">
                                Conoce Más Sobre Nosotros
                            </Link>
                        </div>
                        <div className="trust-image">
                            <img src="/images/servicios/tienda.webp" alt="Taller Servillantas Celaya" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;