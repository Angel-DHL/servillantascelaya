import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGift } from 'react-icons/fa';
import { API_URL } from '../config';
import './LeadPopup.css';

const LeadPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', contact: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    
    useEffect(() => {
        // Verificar si ya se mostró antes
        const hasSeenPopup = localStorage.getItem('hasSeenPopup');
        
        if (!hasSeenPopup) {
            // Mostrar después de 5 segundos
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenPopup', 'true');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        try {
            const response = await fetch(`${API_URL}/api/leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                setStatus('success');
                localStorage.setItem('hasSeenPopup', 'true');
                setTimeout(() => {
                    handleClose();
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error enviando lead:", error);
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="popup-overlay">
                    <motion.div 
                        className="popup-content"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <button className="popup-close" onClick={handleClose}>
                            <FaTimes />
                        </button>
                        
                        <div className="popup-header">
                            <div className="popup-icon">
                                <FaGift />
                            </div>
                            <h3>¡Descuento Especial!</h3>
                            <p>Déjanos tus datos y recibe una cotización preferencial en tu primer servicio con nosotros.</p>
                        </div>

                        {status === 'success' ? (
                            <div className="popup-success">
                                <p>¡Gracias! Hemos registrado tus datos.</p>
                            </div>
                        ) : (
                            <form className="popup-form" onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Tu Nombre" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                                <input 
                                    type="text" 
                                    name="contact" 
                                    placeholder="Email o Teléfono" 
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required 
                                />
                                <button type="submit" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Enviando...' : 'Obtener Beneficio'}
                                </button>
                                {status === 'error' && <p className="popup-error">Hubo un error, intenta de nuevo.</p>}
                            </form>
                        )}
                        <p className="popup-disclaimer">Odiamos el spam tanto como tú. Tus datos están seguros.</p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadPopup;
