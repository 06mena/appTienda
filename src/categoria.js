import React from 'react';
import styles from './css/categorias.module.css';  // Importa el CSS como un módulo
import { Link } from 'react-router-dom';

const Categorias = () => {
  return (
    <div className={styles.principalCategorias}>
      <div className={styles.tituloCategoria}>
        <h2 >Categorías</h2>
      </div>
      <div className={styles.categorias}>
        <Link to="/alimentos">
          <img src="https://res.cloudinary.com/dj1cegfhf/image/upload/v1726528004/Container_lvjtgx.png" alt="Alimentos" className={styles.imagen} />
        </Link>
        <Link to="/cosmeticos-naturales">
          <img src="https://res.cloudinary.com/dj1cegfhf/image/upload/v1725823310/cosmeticos_zbzrsj.png" alt="Cosméticos Naturales" className={styles.imagen} />
        </Link>
        <Link to="/esencias-florales">
          <img src="https://res.cloudinary.com/dj1cegfhf/image/upload/v1725823338/esencias_ugxisw.png" alt="Esencias" className={styles.imagen} />
        </Link>
        <Link to="/homeopaticoss">
          <img src="https://res.cloudinary.com/dj1cegfhf/image/upload/v1725823382/homeopaticos_mvua0b.png" alt="Homeopáticos" className={styles.imagen} />
        </Link>
        <Link to="/fitoterapeuticos">
          <img src="https://res.cloudinary.com/dj1cegfhf/image/upload/v1725823410/fitoterapeuticos_beseou.png" alt="Fitoterapéuticos" className={styles.imagen} />
        </Link>
        <Link to="/medicamentos">
          <img src="https://res.cloudinary.com/dj1cegfhf/image/upload/v1725823432/medicamentos_j3h6g9.png" alt="Medicamentos" className={styles.imagen} />
        </Link>
        <Link to="/suplementos-dietarios">
          <img src="https://res.cloudinary.com/dj1cegfhf/image/upload/v1725823463/suplementos_zi0exq.png" alt="Suplementos" className={styles.imagen} />
        </Link>
        <Link to="/aromaterapia">
          <img src="https://res.cloudinary.com/dj1cegfhf/image/upload/v1725823486/aromaterapia_tewbkt.png" alt="Aromaterapia" className={styles.imagen} />
        </Link>
      </div>
    </div>
  );
};

export default Categorias;
