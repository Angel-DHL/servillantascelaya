import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaCalendar,
    FaUser,
    FaClock,
    FaSearch,
    FaTag
} from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const categories = [
        'Todos',
        'Mantenimiento',
        'Llantas',
        'Seguridad',
        'Consejos',
        'Tecnología'
    ];

    const blogPosts = [
        {
            id: 1,
            title: '¿Cuándo Cambiar las Llantas de tu Auto?',
            excerpt: 'Descubre las señales que indican que es momento de renovar tus llantas y garantizar tu seguridad en el camino.',
            category: 'Llantas',
            author: 'Equipo Servillantas',
            date: '2024-01-15',
            readTime: '5 min',
            image: '/images/servicios/img1.webp',
            content: `Las llantas son uno de los componentes más importantes de tu vehículo. 
      Aquí te compartimos las principales señales de que necesitas cambiarlas:
      
      1. Profundidad del dibujo menor a 1.6mm
      2. Desgaste irregular
      3. Grietas o cortes en los flancos
      4. Edad mayor a 5 años
      5. Vibración excesiva al conducir`
        },
        {
            id: 2,
            title: 'Importancia de la Alineación y Balanceo',
            excerpt: 'Conoce por qué estos servicios son fundamentales para el rendimiento y durabilidad de tus llantas.',
            category: 'Mantenimiento',
            author: 'Equipo Servillantas',
            date: '2024-01-10',
            readTime: '4 min',
            image: '/images/servicios/img2.webp',
            content: `La alineación y balanceo son servicios esenciales que muchas veces se pasan por alto.
      
      Beneficios de una alineación correcta:
      - Mayor durabilidad de las llantas
      - Mejor consumo de combustible
      - Dirección más precisa
      - Conducción más segura
      
      Se recomienda realizar estos servicios cada 10,000 km o cuando notes desgaste irregular.`
        },
        {
            id: 3,
            title: 'Mantenimiento Preventivo: Tu Mejor Inversión',
            excerpt: 'El mantenimiento preventivo puede ahorrarte miles de pesos en reparaciones mayores.',
            category: 'Mantenimiento',
            author: 'Equipo Servillantas',
            date: '2024-01-05',
            readTime: '6 min',
            image: '/images/servicios/tienda.webp',
            content: `Un programa de mantenimiento preventivo adecuado puede extender significativamente
      la vida útil de tu vehículo.
      
      Elementos clave del mantenimiento preventivo:
      - Cambio de aceite cada 5,000 km
      - Revisión de frenos cada 10,000 km
      - Alineación y balanceo cada 10,000 km
      - Revisión de suspensión cada 20,000 km
      - Cambio de filtros según especificaciones
      
      Invertir en mantenimiento preventivo es invertir en tu seguridad y economía.`
        },
        {
            id: 4,
            title: 'Cómo Cuidar tus Frenos',
            excerpt: 'Tips esenciales para mantener tu sistema de frenos en óptimas condiciones.',
            category: 'Seguridad',
            author: 'Equipo Servillantas',
            date: '2023-12-28',
            readTime: '5 min',
            image: '/images/servicios/img4.webp',
            content: `Los frenos son el sistema de seguridad más importante de tu vehículo.
      
      Señales de que tus frenos necesitan atención:
      - Ruidos al frenar
      - Vibración en el pedal
      - Mayor recorrido del pedal
      - Luz de advertencia encendida
      - Desgaste visual de las balatas
      
      No esperes a que fallen por completo. Programa revisiones periódicas.`
        },
        {
            id: 5,
            title: 'Tecnología en Alineación Computarizada',
            excerpt: 'Descubre cómo la tecnología moderna mejora la precisión en la alineación de tu vehículo.',
            category: 'Tecnología',
            author: 'Equipo Servillantas',
            date: '2023-12-20',
            readTime: '4 min',
            image: '/images/servicios/img2.webp',
            content: `La alineación computarizada representa un avance significativo en el servicio automotriz.
      
      Ventajas de la alineación computarizada:
      - Precisión al milímetro
      - Diagnóstico completo de la suspensión
      - Ajuste de todos los ángulos
      - Resultados inmediatos
      - Mayor durabilidad de las llantas
      
      En Servillantas Celaya contamos con equipos de última generación.`
        },
        {
            id: 6,
            title: 'Presión de Llantas: Todo lo que Debes Saber',
            excerpt: 'La presión correcta de tus llantas afecta el rendimiento, seguridad y economía de combustible.',
            category: 'Consejos',
            author: 'Equipo Servillantas',
            date: '2023-12-15',
            readTime: '3 min',
            image: '/images/servicios/img1.webp',
            content: `Mantener la presión correcta en tus llantas es más importante de lo que piensas.
      
      Consecuencias de presión incorrecta:
      - Mayor desgaste de llantas
      - Mayor consumo de combustible
      - Menor estabilidad del vehículo
      - Riesgo de reventón
      
      Revisa la presión al menos una vez al mes y antes de viajes largos.`
        },
        {
            id: 7,
            title: 'Suspensión: Señales de Problemas',
            excerpt: 'Identifica los síntomas de problemas en la suspensión antes de que se conviertan en reparaciones costosas.',
            category: 'Mantenimiento',
            author: 'Equipo Servillantas',
            date: '2023-12-10',
            readTime: '5 min',
            image: '/images/servicios/img3.webp',
            content: `Un sistema de suspensión en mal estado afecta la seguridad y comodidad.
      
      Señales de alerta:
      - Ruidos al pasar topes
      - Vehículo se inclina en curvas
      - Rebotes excesivos
      - Desgaste irregular de llantas
      - Fugas de aceite en amortiguadores
      
      No ignores estas señales, pueden comprometer tu seguridad.`
        },
        {
            id: 8,
            title: 'Preparando tu Auto para un Viaje Largo',
            excerpt: 'Checklist completo para asegurar que tu vehículo esté listo para recorrer largas distancias.',
            category: 'Consejos',
            author: 'Equipo Servillantas',
            date: '2023-12-05',
            readTime: '7 min',
            image: '/images/hero.jpg',
            content: `Antes de salir de viaje, asegúrate de revisar estos puntos clave:
      
      Checklist pre-viaje:
      ✓ Nivel y estado del aceite
      ✓ Presión de todas las llantas (incluida refacción)
      ✓ Sistema de frenos
      ✓ Luces y señales
      ✓ Líquido de frenos
      ✓ Anticongelante
      ✓ Batería
      ✓ Limpiadores
      
      Una revisión completa puede evitar contratiempos en carretera.`
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <>
            <Helmet>
                <title>Blog Automotriz - Consejos y Tips | Servillantas Celaya</title>
                <meta name="description" content="Consejos expertos sobre mantenimiento automotriz, llantas, frenos, suspensión y más. Blog de Servillantas Celaya con información útil para tu vehículo." />
                <meta name="keywords" content="blog automotriz, consejos llantas, mantenimiento auto, tips mecánica, cuidado vehículo celaya" />
                <link rel="canonical" href="https://www.servillantascelaya.com.mx/blog/" />
                <meta property="og:title" content="Blog Automotriz - Servillantas Celaya" />
                <meta property="og:description" content="Consejos, tips y guías sobre el cuidado y mantenimiento de tu vehículo." />
            </Helmet>

            {/* Hero */}
            <section className="blog-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="blog-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Blog Automotriz</h1>
                        <p>Consejos, tips y guías para el cuidado de tu vehículo</p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="section featured-post">
                <div className="container">
                    <motion.div
                        className="featured-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="featured-image">
                            <img src={featuredPost.image} alt={featuredPost.title} />
                            <span className="featured-badge">Destacado</span>
                        </div>
                        <div className="featured-text">
                            <span className="post-category">{featuredPost.category}</span>
                            <h2>{featuredPost.title}</h2>
                            <p>{featuredPost.excerpt}</p>
                            <div className="post-meta">
                                <span><FaCalendar /> {new Date(featuredPost.date).toLocaleDateString('es-MX')}</span>
                                <span><FaUser /> {featuredPost.author}</span>
                                <span><FaClock /> {featuredPost.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="section blog-content">
                <div className="container">
                    <div className="blog-controls">
                        <div className="search-box">
                            <FaSearch />
                            <input
                                type="text"
                                placeholder="Buscar artículos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="category-filter">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    <FaTag /> {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="blog-grid">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                className="blog-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="blog-card-image">
                                    <img src={post.image} alt={post.title} />
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <div className="blog-card-content">
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="blog-card-meta">
                                        <span><FaCalendar /> {new Date(post.date).toLocaleDateString('es-MX')}</span>
                                        <span><FaClock /> {post.readTime}</span>
                                    </div>
                                    <div className="blog-card-footer">
                                        <span className="blog-author"><FaUser /> {post.author}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="no-results">
                            <p>No se encontraron artículos con los criterios de búsqueda.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Sidebar con Posts Recientes */}
            <section className="section recent-posts">
                <div className="container">
                    <h2>Artículos Recientes</h2>
                    <div className="recent-posts-grid">
                        {recentPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="recent-post-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <img src={post.image} alt={post.title} />
                                <div className="recent-post-info">
                                    <span className="recent-category">{post.category}</span>
                                    <h4>{post.title}</h4>
                                    <span className="recent-date">
                                        <FaCalendar /> {new Date(post.date).toLocaleDateString('es-MX')}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="blog-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>¿Tienes Dudas Sobre el Mantenimiento de tu Vehículo?</h2>
                        <p>Nuestros expertos están listos para ayudarte</p>
                        <div className="cta-buttons">
                            <Link to="/contacto" className="btn btn-primary">
                                Contáctanos
                            </Link>
                            <a href="tel:4611203488" className="btn btn-secondary">
                                Llama Ahora
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Blog;