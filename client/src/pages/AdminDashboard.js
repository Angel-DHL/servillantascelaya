import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaChartLine, FaUsers, FaEnvelope, FaSignOutAlt, FaEye } from 'react-icons/fa';
import { API_URL } from '../config';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ metrics: { visits: 0 }, leads: [], contacts: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Verificar Auth estática
        const isAuthenticated = sessionStorage.getItem('adminAuth');
        if (!isAuthenticated) {
            navigate('/admin');
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/admin/data`);
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                }
            } catch (error) {
                console.error("Error fetching admin data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('adminAuth');
        navigate('/admin');
    };

    if (loading) {
        return <div className="admin-loading">Cargando Panel de Control...</div>;
    }

    return (
        <div className="admin-dashboard">
            <Helmet>
                <title>Dashboard - Servillantas Celaya</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <header className="admin-header">
                <div className="container admin-header-content">
                    <h2>Panel de Control</h2>
                    <button onClick={handleLogout} className="btn-logout">
                        <FaSignOutAlt /> Cerrar Sesión
                    </button>
                </div>
            </header>

            <div className="container admin-content">
                {/* Metrics Cards */}
                <div className="metrics-grid">
                    <div className="metric-card">
                        <div className="metric-icon"><FaEye /></div>
                        <div className="metric-info">
                            <h3>{data.metrics?.visits || 0}</h3>
                            <p>Visitas Totales</p>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaUsers /></div>
                        <div className="metric-info">
                            <h3>{data.leads?.length || 0}</h3>
                            <p>Leads (Popup)</p>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaEnvelope /></div>
                        <div className="metric-info">
                            <h3>{data.contacts?.length || 0}</h3>
                            <p>Contactos (Formulario)</p>
                        </div>
                    </div>
                </div>

                <div className="tables-grid">
                    {/* Leads Table */}
                    <div className="admin-table-container">
                        <h3><FaUsers /> Capturas de Popup (Leads)</h3>
                        <div className="table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Nombre</th>
                                        <th>Contacto (Email/Tel)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.leads && data.leads.length > 0 ? (
                                        data.leads.map(lead => (
                                            <tr key={lead.id}>
                                                <td>{new Date(lead.date).toLocaleDateString('es-MX', { hour: '2-digit', minute: '2-digit' })}</td>
                                                <td>{lead.name}</td>
                                                <td>{lead.contact}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="3" className="text-center">No hay leads todavía</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Contacts Table */}
                    <div className="admin-table-container">
                        <h3><FaEnvelope /> Formulario de Contacto</h3>
                        <div className="table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Teléfono</th>
                                        <th>Servicio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.contacts && data.contacts.length > 0 ? (
                                        data.contacts.map(contact => (
                                            <tr key={contact.id}>
                                                <td>{new Date(contact.date).toLocaleDateString('es-MX', { hour: '2-digit', minute: '2-digit' })}</td>
                                                <td>{contact.nombre}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.telefono}</td>
                                                <td>{contact.servicio || '-'}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="5" className="text-center">No hay mensajes todavía</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
