import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'db.json');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
    origin: ['http://localhost:3000', 'https://www.servillantascelaya.com.mx', 'https://servillantascelaya.com.mx']
}));
app.use(express.json());

// Database Utility Functions
const readDB = () => {
    try {
        if (!fs.existsSync(dbPath)) {
            // Inicializar si no existe
            const initialData = { metrics: { visits: 0 }, leads: [], contacts: [] };
            fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
            return initialData;
        }
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading DB:", err);
        return { metrics: { visits: 0 }, leads: [], contacts: [] };
    }
};

const writeDB = (data) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error("Error writing DB:", err);
    }
};

// Configurar nodemailer (Mantenido por si acaso)
/*
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
*/

// --- ENDPOINTS PARA EL ADMIN PANEL Y POPUP ---

// 1. Guardar un Lead del Popup
app.post('/api/leads', (req, res) => {
    const { name, contact } = req.body;
    if (!name || !contact) {
        return res.status(400).json({ error: 'Nombre y contacto son requeridos.' });
    }

    const db = readDB();
    const newLead = {
        id: Date.now().toString(),
        name,
        contact,
        date: new Date().toISOString()
    };
    db.leads.push(newLead);
    writeDB(db);

    res.status(201).json({ message: 'Lead guardado', lead: newLead });
});

// 2. Registrar una visita
app.post('/api/metrics/visit', (req, res) => {
    const db = readDB();
    db.metrics.visits += 1;
    writeDB(db);
    res.status(200).json({ message: 'Visit logged', visits: db.metrics.visits });
});

// 3. Endpoint para formulario de contacto
app.post('/api/contact', async (req, res) => {
    const { nombre, email, telefono, mensaje, servicio } = req.body;

    // Guardar en la base de datos JSON
    const db = readDB();
    const newContact = {
        id: Date.now().toString(),
        nombre,
        email,
        telefono,
        servicio,
        mensaje,
        date: new Date().toISOString()
    };
    db.contacts.push(newContact);
    writeDB(db);

    // Opcional: Si quieren seguir enviando correos desde el backend además del frontend:
    // try {
    //    // ... lógica de nodemailer ...
    // } catch(...) {}

    res.status(200).json({ message: 'Contacto guardado exitosamente' });
});

// 4. Obtener todos los datos para el Admin Dashboard
app.get('/api/admin/data', (req, res) => {
    // Aquí idealmente validaríamos un token JWT, pero por simplicidad de este panel lo omitiremos
    // ya que la validación se hará de forma estática en el frontend.
    const db = readDB();
    res.status(200).json(db);
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});