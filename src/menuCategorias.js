import React from 'react';
import { Link } from 'react-router-dom'; // Usar Link para redireccionar
import styles from './css/menuCategorias.module.css';


const MenuCat = () => {
  return (
    <div>
      <div className={`container-fluid ${styles.containerMenu}`}>
        <div className={styles.containerCustom}>
          {/* Menú de navegación en la izquierda */}
          <nav className={`h-100 flex-column align-items-stretch ${styles.navbarCustom}`}>
            {/* Título Categorías */}
            <h2 className={styles.titleCustom}>Categorías</h2>
            <nav className="nav nav-pills flex-column">
              <Link className={`nav-link ${styles.navLinkCustom}`} to="/alimentos">Alimentos</Link>
              <Link className={`nav-link ${styles.navLinkCustom}`} to="/cosmeticos-naturales">Cosméticos Naturales</Link>
              <Link className={`nav-link ${styles.navLinkCustom}`} to="/esencias-florales">Esencias Florales</Link>
              <Link className={`nav-link ${styles.navLinkCustom}`} to="/homeopaticos">Homeopáticos</Link>
              <Link className={`nav-link ${styles.navLinkCustom}`} to="/fitoterapeuticos">Fitoterapéuticos</Link>
              <Link className={`nav-link ${styles.navLinkCustom}`} to="/medicamentos">Medicamentos</Link>
              <Link className={`nav-link ${styles.navLinkCustom}`} to="/suplementos-dietarios">Suplementos Dietarios</Link>
              <Link className={`nav-link ${styles.navLinkCustom}`} to="/aromaterapia">Aromaterapia</Link>
            </nav>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MenuCat;