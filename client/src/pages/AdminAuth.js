import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaLock, FaUserSecret } from 'react-icons/fa';
import './AdminAuth.css';

const AdminAuth = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Validación estática (según requerimiento)
        if (credentials.email === 'cservillantas@gmail.com' && credentials.password === 'Cservillantas2026') {
            sessionStorage.setItem('adminAuth', 'true');
            navigate('/admin/dashboard');
        } else {
            setError(true);
        }
    };

    return (
        <div className="admin-auth-container">
            <Helmet>
                <title>Admin Login - Servillantas Celaya</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            
            <div className="auth-box">
                <div className="auth-header">
                    <FaUserSecret className="auth-icon" />
                    <h2>Panel de Administración</h2>
                    <p>Acceso Restringido</p>
                </div>

                <form onSubmit={handleLogin} className="auth-form">
                    <div className="auth-group">
                        <label>Correo Electrónico</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="admin@ejemplo.com"
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="auth-group">
                        <label>Contraseña</label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="••••••••"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="auth-error">Credenciales incorrectas. Intente nuevamente.</p>}

                    <button type="submit" className="auth-btn">
                        <FaLock /> Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminAuth;
