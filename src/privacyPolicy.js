//privacyPolicy.js
import React from 'react';
import styles from './css/privacyPolicy.module.css';
import BarraPrincipal from './barraPrincipal';
import Footer from './footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <BarraPrincipal />
      <section id="politica-datos-personales" className={styles.privacyPolicy}>
        <h1 className={styles.tituloPrivacy}>Política de Tratamiento de Datos Personales</h1>
        <p className={styles.textoPrivacy}>()En rigor de la Ley 1581 de 2012 y el Decreto 137 de 2013, que regulan la recolección y administración de datos personales, Multinaturista y Deportivo "El Obrero" se compromete a proteger su información personal. A continuación, se describen nuestros procedimientos para el manejo de datos personales.</p>

        <h2 className={styles.subtituloPrivacy}>1. Autorización</h2>
        <p  className={styles.textoPrivacy}>Al proporcionar su información personal, usted autoriza a Multinaturista y Deportivo "El Obrero" a utilizarla para fines de atención al cliente, promociones, y otros servicios relacionados.</p>

        <h2 className={styles.subtituloPrivacy}>2. Derechos del Titular</h2>
        <p  className={styles.textoPrivacy}>Usted tiene derecho a conocer, actualizar, y rectificar su información personal, así como a solicitar la eliminación de sus datos. Para ejercer estos derechos, puede contactarnos a través del correo electrónico pjmultinaturistaydeportivo@gmail.com.</p>

        <h2 className={styles.subtituloPrivacy}>3. Modificaciones</h2>
        <p  className={styles.textoPrivacy}>Nos reservamos el derecho de modificar esta política en cualquier momento. Las actualizaciones se publicarán en nuestro sitio web.</p>

        <h2>4. Contacto</h2>
        <p  className={styles.textoPrivacy}>Para consultas relacionadas con la política de datos personales, comuníquese con nosotros a pjmultinaturistaydeportivo@gmail.com o a la dirección Cra. 53 # 33-19. Barrio San jose Obrero - Bello.</p>
      </section>
      <Footer />
    </div>

  );
};

export default PrivacyPolicy;
