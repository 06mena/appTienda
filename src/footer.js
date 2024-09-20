import React from 'react';
import styles from './css/footer.module.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  const whatsappNumber = "+573103351575"; // Número de WhatsApp
  const whatsappMessage = "Hola, tengo una consulta."; // Mensaje predeterminado

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerSection} footer-logo`}>
        <Link to="/">
            <img 
              src="https://res.cloudinary.com/dj1cegfhf/image/upload/v1726073299/logoTienda_deyf5y.jpg" 
              alt="Multinaturista El Obrero" 
              className={styles.footerLogo} 
            />
          </Link>
        </div>
        <div className={`${styles.footerSection} ${styles.footerInfo}`}>
          <h5>Información</h5>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link href="#">Tips</Link></li>
            <li><Link to="/shipping-policy">Políticas</Link></li>
            <li><Link to="/loginAdmin">Administrador</Link></li>
          </ul>
        </div>
        <div className={`${styles.footerSection} ${styles.footerCategories}`}>
          <h5>Categorías</h5>
          <ul>
            <li><Link to="/alimentos">Alimentos</Link></li>
            <li><Link to="/cosmeticos-naturales">Cosméticos naturales </Link></li>
            <li><Link to="/esencias-florales">Esencias florales</Link></li>
            <li><Link to="/homeopaticos">Homeopáticos</Link></li>
            <li><Link to="/fitoterapeuticos">Fitoterapéuticos</Link></li>
            <li><Link to="/medicamentos">Medicamentos</Link></li>
            <li><Link to="/suplementos-dietarios">Suplementos dietarios</Link></li>
            <li><Link to="/aromaterapia">Aromaterapia</Link></li>
          </ul>
        </div>
        <div className={`${styles.footerSection} ${styles.footerContact}`}>
          <h5>Contacto</h5>
          <p><strong>Oficina principal:</strong><br />Cra. 53 # 33-19. Barrio San jose Obrero - Bello</p><br/>
          <strong>Redes sociales:</strong>
          <p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              <FaWhatsapp size={24} color='green' /> 3103351575
            </a>
          </p>
          <p>
            <a
              className={styles.linkDecoration}
              href='https://www.instagram.com/natu_deport?igsh=NmNtN2l1dzhwYWw5'
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} color='green' /> Multinaturista y Deportivo
            </a>
          </p>

          <p>
            <a
              className={styles.linkDecoration}
              href='https://www.facebook.com/share/CnWdiFo7bWc4aQG4/?mibextid=qi2Omg'
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size={24} color='green' /> Multinaturista y Deportivo El Obrero
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
