import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaWhatsapp,
    FaCheckCircle,
    FaExclamationTriangle
} from 'react-icons/fa';
import './Contacto.css';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
    });

    const [formStatus, setFormStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const serviciosOptions = [
        'Venta de Llantas',
        'Alineación y Balanceo',
        'Suspensión',
        'Frenos',
        'Cambio de Aceite',
        'Mecánica General',
        'Otro'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, success: false, error: false, message: '' });

        const serviceId = 'service_1g7y8ym';
        const templateId = 'template_l0qw2rb';
        const publicKey = 'M7dZPdWTTaRUDzxh-';

        const templateParams = {
            name: formData.nombre,
            email: formData.email,
            message: `Teléfono: ${formData.telefono}\n\nMensaje:\n${formData.mensaje}`,
            title: `Cotización: ${formData.servicio || 'General'}`,
            time: new Date().toLocaleString('es-MX')
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setFormStatus({
                loading: false,
                success: true,
                error: false,
                message: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.'
            });

            // Limpiar formulario
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                servicio: '',
                mensaje: ''
            });

            // Limpiar mensaje después de 5 segundos
            setTimeout(() => {
                setFormStatus({ loading: false, success: false, error: false, message: '' });
            }, 5000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            setFormStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Hubo un error al enviar el mensaje. Por favor, intenta llamarnos directamente.'
            });

            setTimeout(() => {
                setFormStatus({ loading: false, success: false, error: false, message: '' });
            }, 5000);
        }
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: 'Dirección',
            content: 'Celaya, Guanajuato, México',
            link: null
        },
        {
            icon: <FaPhone />,
            title: 'Teléfonos',
            content: (
                <>
                    <a href="tel:4611203488">461 120 3488</a>
                    <a href="tel:7201987926">720 198 7926</a>
                </>
            ),
            link: null
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            content: 'cservillantas@gmail.com',
            link: 'mailto:cservillantas@gmail.com'
        },
        {
            icon: <FaClock />,
            title: 'Horario',
            content: (
                <>
                    <span>Lun - Vie: 9:00 AM - 6:00 PM<br></br></span>
                    <span>Sábado: 9:00 AM - 2:00 PM<br></br></span>
                    <span>Domingo: Cerrado</span>
                </>
            ),
            link: null
        }
    ];

    return (
        <>
            <Helmet>
                <title>Contacto - Servillantas Celaya | Llama al 461 120 3488</title>
                <meta name="description" content="Contáctanos en Servillantas Celaya. Teléfonos: 461 120 3488 y 720 198 7926. Ubicados en Celaya, Guanajuato. ¡Cotiza ahora!" />
                <meta name="keywords" content="contacto servillantas celaya, teléfono taller celaya, cotización llantas celaya, ubicación servillantas" />
                <link rel="canonical" href="https://www.servillantascelaya.com.mx/contacto/" />
                <meta property="og:title" content="Contacto - Servillantas Celaya" />
                <meta property="og:description" content="Ponte en contacto con nosotros. Atención personalizada y cotizaciones sin compromiso." />
            </Helmet>

            {/* Hero */}
            <section className="contacto-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <motion.div
                        className="contacto-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Contáctanos</h1>
                        <p>Estamos listos para atender tus necesidades automotrices</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="contact-info-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="contact-icon">{info.icon}</div>
                                <h3>{info.title}</h3>
                                <div className="contact-content">
                                    {info.link ? (
                                        <a href={info.link}>{info.content}</a>
                                    ) : (
                                        <div>{info.content}</div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="section contact-form-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Formulario */}
                        <motion.div
                            className="form-container"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Envíanos un Mensaje</h2>
                            <p className="form-description">
                                Completa el formulario y nos pondremos en contacto contigo lo antes posible
                            </p>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre Completo *</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tu nombre completo"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="tu@email.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="telefono">Teléfono *</label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            required
                                            placeholder="461 123 4567"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="servicio">Servicio de Interés</label>
                                    <select
                                        id="servicio"
                                        name="servicio"
                                        value={formData.servicio}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        {serviciosOptions.map(servicio => (
                                            <option key={servicio} value={servicio}>
                                                {servicio}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje *</label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Cuéntanos cómo podemos ayudarte..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-submit"
                                    disabled={formStatus.loading}
                                >
                                    {formStatus.loading ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>

                                {/* Status Messages */}
                                {formStatus.success && (
                                    <div className="alert alert-success">
                                        <FaCheckCircle /> {formStatus.message}
                                    </div>
                                )}

                                {formStatus.error && (
                                    <div className="alert alert-error">
                                        <FaExclamationTriangle /> {formStatus.message}
                                    </div>
                                )}
                            </form>
                        </motion.div>

                        {/* Map & Quick Contact */}
                        <motion.div
                            className="map-container"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="quick-contact">
                                <h3>¿Necesitas Atención Inmediata?</h3>
                                <p>Llámanos o envíanos un WhatsApp</p>
                                <div className="quick-buttons">
                                    <a href="tel:4611203488" className="quick-btn phone">
                                        <FaPhone /> 461 120 3488
                                    </a>
                                    <a href="tel:7201987926" className="quick-btn phone">
                                        <FaPhone /> 720 198 7926
                                    </a>
                                    <a
                                        href="https://wa.me/524611203488"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="quick-btn whatsapp"
                                    >
                                        <FaWhatsapp /> WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="map-embed">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119431.89058203486!2d-100.88905934999999!3d20.5287823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b7d61f1a6fb%3A0x6ab3b5b3e3e1e1!2sCelaya%2C%20Gto.!5e0!3m2!1ses!2smx!4v1234567890"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0, borderRadius: '10px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación Servillantas Celaya"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Preguntas Frecuentes</h2>
                    </div>
                    <div className="faq-grid">
                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>¿Cuál es el horario de atención?</h3>
                            <p>Lunes a Viernes de 8:00 AM a 7:00 PM y Sábados de 8:00 AM a 5:00 PM.</p>
                        </motion.div>
                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>¿Necesito cita previa?</h3>
                            <p>No es obligatorio, pero te recomendamos agendar cita para una atención más rápida.</p>
                        </motion.div>
                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3>¿Ofrecen garantía?</h3>
                            <p>Sí, todos nuestros servicios y refacciones cuentan con garantía.</p>
                        </motion.div>
                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3>¿Aceptan tarjetas?</h3>
                            <p>Sí, aceptamos efectivo, tarjetas de débito y crédito.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacto;