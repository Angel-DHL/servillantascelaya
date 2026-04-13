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
    FaPhone,
    FaWhatsapp,
    FaStar,
    FaQuoteLeft,
    FaChevronRight,
    FaOilCan,
    FaShieldAlt,
    FaCog,
    FaSearch,
    FaFileInvoiceDollar,
    FaWrench
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const services = [
        {
            icon: <FaCar />,
            title: 'Venta de Llantas',
            description: 'Las mejores marcas del mercado con garantía y calidad certificada',
            image: '/images/servicios/img1.webp'
        },
        {
            icon: <FaTools />,
            title: 'Alineación y Balanceo',
            description: 'Equipos de última generación para el mejor desempeño de tu vehículo',
            image: '/images/servicios/img2.webp'
        },
        {
            icon: <FaCog />,
            title: 'Suspensión',
            description: 'Diagnóstico y reparación completa de sistemas de suspensión',
            image: '/images/servicios/img3.webp'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Sistema de Frenos',
            description: 'Tu seguridad es primero. Mantenimiento y reparación de frenos',
            image: '/images/servicios/img4.webp'
        },
        {
            icon: <FaOilCan />,
            title: 'Cambio de Aceite',
            description: 'Mantenimiento preventivo para alargar la vida de tu motor',
            image: '/images/servicios/img5.webp'
        },
        {
            icon: <FaWrench />,
            title: 'Mecánica General',
            description: 'Diagnóstico y reparación de cualquier falla mecánica',
            image: '/images/servicios/tienda.webp'
        }
    ];

    const testimonials = [
        {
            name: 'Juan Pérez',
            image: '/images/usuarios/usuario1.png',
            text: 'Excelente servicio y atención. Las llantas que compré son de gran calidad y el servicio de alineación fue impecable.',
            rating: 5,
            service: 'Venta de Llantas'
        },
        {
            name: 'María García',
            image: '/images/usuarios/usuario2.png',
            text: 'Muy profesionales. Me explicaron todo el proceso de reparación de mi suspensión y los precios son muy justos.',
            rating: 5,
            service: 'Suspensión'
        },
        {
            name: 'Ricardo Torres',
            image: '/images/usuarios/usuario3.png',
            text: 'El mejor lugar en Celaya para el mantenimiento de tu auto. Rápidos, honestos y con tecnología de punta.',
            rating: 5,
            service: 'Mecánica General'
        },
        {
            name: 'Laura Sánchez',
            image: '/images/usuarios/usuario4.png',
            text: 'Increíble atención al cliente. Me ayudaron a elegir las mejores llantas para mi camioneta según mi presupuesto.',
            rating: 5,
            service: 'Venta de Llantas'
        },
        {
            name: 'Miguel Hernández',
            image: '/images/usuarios/usuario5.png',
            text: 'Servicio de frenos rápido y seguro. Siento mi coche mucho mejor al conducir. ¡Totalmente recomendados!',
            rating: 5,
            service: 'Frenos'
        },
        {
            name: 'Ana Martínez',
            image: '/images/usuarios/usuario6.png',
            text: 'Llevo años trayendo mis vehículos aquí y nunca me han fallado. La garantía que ofrecen da mucha tranquilidad.',
            rating: 5,
            service: 'Alineación y Balanceo'
        }
    ];

    const features = [
        { icon: <FaClock />, number: '15+', text: 'Años de Experiencia' },
        { icon: <FaAward />, number: '100%', text: 'Garantía en Servicios' },
        { icon: <FaUsers />, number: '5,000+', text: 'Clientes Satisfechos' },
        { icon: <FaTools />, number: '6', text: 'Servicios Especializados' }
    ];

    const workProcess = [
        {
            icon: <FaSearch />,
            step: '01',
            title: 'Diagnóstico',
            description: 'Evaluamos tu vehículo con equipos de última tecnología para identificar las necesidades exactas.'
        },
        {
            icon: <FaFileInvoiceDollar />,
            step: '02',
            title: 'Cotización',
            description: 'Te presentamos un presupuesto transparente y detallado, sin sorpresas ni costos ocultos.'
        },
        {
            icon: <FaWrench />,
            step: '03',
            title: 'Servicio',
            description: 'Nuestros técnicos certificados realizan el trabajo con los más altos estándares de calidad.'
        }
    ];



    return (
        <>
            <Helmet>
                <title>Servillantas Celaya - Expertos en Servicio Automotriz | Llantas, Alineación y Balanceo</title>
                <meta name="description" content="Servillantas Celaya ofrece venta de llantas, alineación, balanceo, suspensión y frenos. Más de 15 años de experiencia en Celaya, Guanajuato. ¡Llama al 461 120 3488!" />
                <meta name="keywords" content="llantas celaya, alineación y balanceo celaya, taller mecánico celaya, suspensión celaya, frenos celaya, servicio automotriz celaya" />
                <link rel="canonical" href="https://www.servillantascelaya.com.mx/" />
                <meta property="og:title" content="Servillantas Celaya - Expertos en Servicio Automotriz" />
                <meta property="og:description" content="Venta de llantas, alineación, balanceo y más. Servicio profesional en Celaya, Guanajuato." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.servillantascelaya.com.mx/" />
                <meta property="og:image" content="https://www.servillantascelaya.com.mx/images/logo.png" />
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-decorations">
                    <div className="hero-circle hero-circle-1"></div>
                    <div className="hero-circle hero-circle-2"></div>
                    <div className="hero-circle hero-circle-3"></div>
                </div>
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                    >
                        <span className="hero-badge">🏆 +15 Años de Experiencia en Celaya</span>
                        <h1>Expertos en <span className="text-gradient">Servicio Automotriz</span></h1>
                        <p>Soluciones integrales para el mantenimiento de tu vehículo. Llantas, alineación, frenos, suspensión y más con garantía en todos nuestros servicios.</p>
                        <div className="hero-buttons">
                            <Link to="/contacto" className="btn btn-primary">
                                Cotiza Ahora <FaChevronRight />
                            </Link>
                            <Link to="/servicios" className="btn btn-outline">
                                Ver Servicios
                            </Link>
                        </div>
                        <div className="hero-phones">
                            <a href="tel:4611203488" className="phone-badge">
                                <FaPhone /> 461 120 3488
                            </a>
                            <a href="https://wa.me/524611203488" target="_blank" rel="noopener noreferrer" className="phone-badge whatsapp-badge">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Counter */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.number}</h3>
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
                        <p>Soluciones completas para el mantenimiento y cuidado de tu vehículo con tecnología de punta</p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="service-card-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="service-card-overlay">
                                        <div className="service-icon-badge">{service.icon}</div>
                                    </div>
                                </div>
                                <div className="service-card-body">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <Link to="/servicios" className="service-link">
                                        Ver detalles <FaChevronRight />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="section-cta">
                        <Link to="/servicios" className="btn btn-primary">
                            Ver Todos los Servicios <FaChevronRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Work Process */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-title">
                        <h2>¿Cómo Trabajamos?</h2>
                        <p>Un proceso simple, transparente y eficiente para el cuidado de tu vehículo</p>
                    </div>

                    <div className="process-grid">
                        {workProcess.map((step, index) => (
                            <motion.div
                                key={index}
                                className="process-card"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="process-step-number">{step.step}</div>
                                <div className="process-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Lo Que Dicen Nuestros Clientes</h2>
                        <p>La confianza de nuestros clientes es nuestra mayor recompensa</p>
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
                                <FaQuoteLeft className="quote-icon" />
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-footer">
                                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                                    <div className="testimonial-info">
                                        <h4>{testimonial.name}</h4>
                                        <span className="testimonial-service">{testimonial.service}</span>
                                        <div className="rating">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
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
                        <p>Nuestro equipo de expertos está listo para ayudarte. Contáctanos ahora y recibe atención personalizada.</p>
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
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="section trust-section">
                <div className="container">
                    <div className="trust-grid">
                        <motion.div
                            className="trust-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>¿Por Qué Elegirnos?</h2>
                            <p className="trust-subtitle">Somos el taller de confianza de miles de familias en Celaya y la región del Bajío.</p>
                            <ul className="trust-list">
                                <li>
                                    <FaCheckCircle />
                                    <div>
                                        <strong>Técnicos certificados</strong>
                                        <span>Personal altamente capacitado y actualizado</span>
                                    </div>
                                </li>
                                <li>
                                    <FaCheckCircle />
                                    <div>
                                        <strong>Equipos de última tecnología</strong>
                                        <span>Diagnóstico y reparación con precisión</span>
                                    </div>
                                </li>
                                <li>
                                    <FaCheckCircle />
                                    <div>
                                        <strong>Garantía en todos los servicios</strong>
                                        <span>Tu tranquilidad está asegurada</span>
                                    </div>
                                </li>
                                <li>
                                    <FaCheckCircle />
                                    <div>
                                        <strong>Precios competitivos</strong>
                                        <span>La mejor relación calidad-precio del mercado</span>
                                    </div>
                                </li>
                                <li>
                                    <FaCheckCircle />
                                    <div>
                                        <strong>Atención personalizada</strong>
                                        <span>Cada cliente recibe un trato único</span>
                                    </div>
                                </li>
                            </ul>
                            <Link to="/sobre-nosotros" className="btn btn-secondary">
                                Conoce Más Sobre Nosotros <FaChevronRight />
                            </Link>
                        </motion.div>
                        <motion.div
                            className="trust-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="/images/servicios/tienda.webp" alt="Taller Servillantas Celaya" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;