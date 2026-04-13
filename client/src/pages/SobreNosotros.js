import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaAward,
    FaUsers,
    FaClock,
    FaTools,
    FaCheckCircle,
    FaHeart,
    FaLightbulb,
    FaHandshake
} from 'react-icons/fa';
import './SobreNosotros.css';

const SobreNosotros = () => {
    const stats = [
        { icon: <FaClock />, number: '15+', text: 'Años de Experiencia' },
        { icon: <FaUsers />, number: '5000+', text: 'Clientes Satisfechos' },
        { icon: <FaTools />, number: '100%', text: 'Calidad Garantizada' },
        { icon: <FaAward />, number: '50+', text: 'Técnicos Certificados' }
    ];

    const values = [
        {
            icon: <FaHeart />,
            title: 'Pasión',
            description: 'Amamos lo que hacemos y se refleja en cada servicio que brindamos'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Calidad',
            description: 'Comprometidos con la excelencia en cada trabajo que realizamos'
        },
        {
            icon: <FaHandshake />,
            title: 'Confianza',
            description: 'Construimos relaciones duraderas basadas en la honestidad'
        },
        {
            icon: <FaLightbulb />,
            title: 'Innovación',
            description: 'Constantemente actualizamos nuestros equipos y conocimientos'
        }
    ];

    const timeline = [
        {
            year: '2008',
            title: 'Nuestros Inicios',
            description: 'Comenzamos como un pequeño taller familiar con el sueño de brindar el mejor servicio automotriz en Celaya. Con dedicación y esfuerzo, sentamos las bases de lo que hoy somos.'
        },
        {
            year: '2012',
            title: 'Expansión de Servicios',
            description: 'Incorporamos equipos de última generación para alineación computarizada y diagnóstico electrónico, ampliando nuestra capacidad de atención.'
        },
        {
            year: '2016',
            title: 'Reconocimiento Regional',
            description: 'Nos convertimos en el taller de confianza de miles de familias celayenses, consolidándonos como referentes en el sector automotriz del Bajío.'
        },
        {
            year: '2020',
            title: 'Innovación Constante',
            description: 'A pesar de los desafíos globales, invertimos en nuevas tecnologías y capacitación continua para nuestro equipo.'
        },
        {
            year: '2024',
            title: 'Líderes en Celaya',
            description: 'Continuamos innovando con tecnología de punta, presencia digital y un compromiso inquebrantable con la excelencia en el servicio.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Sobre Nosotros - Servillantas Celaya | 15+ Años de Experiencia</title>
                <meta name="description" content="Conoce la historia de Servillantas Celaya. Más de 15 años brindando servicios automotrices de calidad en Celaya, Guanajuato. Taller familiar de confianza." />
                <meta name="keywords" content="servillantas celaya historia, taller automotriz celaya, mecánica celaya, empresa familiar celaya" />
                <link rel="canonical" href="https://www.servillantascelaya.com.mx/sobre-nosotros/" />
                <meta property="og:title" content="Sobre Nosotros - Taller Automotriz de Confianza en Celaya" />
                <meta property="og:description" content="15+ años de experiencia en servicios automotrices. Conoce nuestra historia, valores y compromiso con la calidad." />
            </Helmet>

            {/* Hero */}
            <section className="about-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Sobre Nosotros</h1>
                        <p>Más de 15 años de pasión por el servicio automotriz</p>
                    </motion.div>
                </div>
            </section>

            {/* Nuestra Historia */}
            <section className="section our-story">
                <div className="container">
                    <div className="story-grid">
                        <motion.div
                            className="story-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2>Nuestra Historia</h2>
                            <p>
                                Servillantas Celaya nació en 2008 como un emprendimiento familiar con la visión
                                de ofrecer servicios automotrices de la más alta calidad en Celaya, Guanajuato.
                                Desde el primer día, nuestro objetivo ha sido claro: ganarnos la confianza de
                                cada cliente a través de la honestidad, el profesionalismo y el trabajo bien hecho.
                            </p>
                            <p>
                                Lo que comenzó como un pequeño taller con equipos básicos, se ha transformado
                                en uno de los talleres más confiables y mejor equipados de la región, gracias
                                a la confianza que miles de familias celayenses han depositado en nosotros
                                durante más de 15 años.
                            </p>
                            <p>
                                Hoy contamos con tecnología de punta, técnicos altamente capacitados y una
                                amplia variedad de servicios que cubren todas las necesidades de tu vehículo.
                                Pero lo más importante sigue siendo nuestro compromiso inquebrantable de
                                brindar un servicio excepcional a cada uno de nuestros clientes.
                            </p>
                        </motion.div>
                        <motion.div
                            className="story-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img src="/images/hero.jpg" alt="Historia Servillantas Celaya" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="stat-icon">{stat.icon}</div>
                                <h3>{stat.number}</h3>
                                <p>{stat.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="section mission-vision">
                <div className="container">
                    <div className="mv-grid">
                        <motion.div
                            className="mv-card mission"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="mv-icon">
                                <FaCheckCircle />
                            </div>
                            <h2>Misión</h2>
                            <p>
                                Brindar servicios automotrices de excelencia, utilizando tecnología de punta
                                y personal altamente capacitado, garantizando la satisfacción total de nuestros
                                clientes y contribuyendo a la seguridad vial de nuestra comunidad.
                            </p>
                        </motion.div>
                        <motion.div
                            className="mv-card vision"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="mv-icon">
                                <FaLightbulb />
                            </div>
                            <h2>Visión</h2>
                            <p>
                                Ser el taller automotriz líder en Celaya y la región del Bajío, reconocido
                                por nuestra calidad, innovación y compromiso con nuestros clientes,
                                estableciendo nuevos estándares de excelencia en la industria.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="section values-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Nuestros Valores</h2>
                        <p>Los principios que guían cada una de nuestras acciones</p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section timeline-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Nuestro Recorrido</h2>
                        <p>Los momentos que marcaron nuestra historia</p>
                    </div>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="timeline-content">
                                    <div className="timeline-year">{item.year}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>¿Quieres Ser Parte de Nuestra Historia?</h2>
                        <p>Únete a los miles de clientes satisfechos que confían en nosotros</p>
                        <div className="cta-buttons">
                            <Link to="/contacto" className="btn btn-primary">
                                Contáctanos
                            </Link>
                            <Link to="/servicios" className="btn btn-secondary">
                                Ver Servicios
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default SobreNosotros;