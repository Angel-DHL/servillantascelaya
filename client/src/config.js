// Configuración de URLs dinámicas para el entorno
// Detecta si estamos corriendo de forma local (en modo desarrollo) o en el servidor.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// En local, el backend corre en 5000. 
// En producción (Hosting), el frontend de React correrá en public_html
// y las rutas API relativas /api/ apuntarán automáticamente al servidor configurado.
// Hostgator a veces requiere la URL absoluta: 'https://www.servillantascelaya.com.mx'
// Para ir a lo seguro, usaremos la URL completa si no es localhost.

export const API_URL = isLocalhost 
    ? 'http://localhost:5000' 
    : 'https://www.servillantascelaya.com.mx';
