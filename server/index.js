import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000'
}));
app.use(express.json());

// Configurar nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Endpoint para formulario de contacto
app.post('/api/contact', async (req, res) => {
    const { nombre, email, telefono, mensaje, servicio } = req.body;

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.CONTACT_EMAIL,
            subject: `Nuevo contacto desde la web - ${servicio || 'General'}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #000b43; border-bottom: 3px solid #f4fe00; padding-bottom: 10px;">
              Nuevo Mensaje de Contacto
            </h2>
            <div style="margin: 20px 0;">
              <p><strong style="color: #000b43;">Nombre:</strong> ${nombre}</p>
              <p><strong style="color: #000b43;">Email:</strong> ${email}</p>
              <p><strong style="color: #000b43;">Teléfono:</strong> ${telefono}</p>
              ${servicio ? `<p><strong style="color: #000b43;">Servicio:</strong> ${servicio}</p>` : ''}
              <p><strong style="color: #000b43;">Mensaje:</strong></p>
              <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0159d5;">
                ${mensaje}
              </p>
            </div>
          </div>
        </div>
      `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Mensaje enviado exitosamente' });
    } catch (error) {
        console.error('Error enviando email:', error);
        res.status(500).json({ message: 'Error al enviar el mensaje' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});