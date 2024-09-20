import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './css/productosRecomendados.module.css';
import { CartContext } from './cartContext';

const ProductosRecomendados = ({ productos, maxProductos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // Valor por defecto
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 992) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar a la función para establecer el valor inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAddToCart = (produ) => {
    addToCart(produ);
    Swal.fire({
      title: 'Producto agregado',
      text: `${produ.nombre} se ha agregado al carrito.`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  if (productos.length === 0) {
    return <p>No hay productos relacionados disponibles.</p>;
  }

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    return numericPrice.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + productos.length) % productos.length);
  };
  
  return (
    <div className={styles.recomendadosContainer}>
      <h2 className={styles.tituloRelacionado}>Productos Relacionados</h2>
      <div className={styles.carousel}>
        <button className={styles.prevButton} onClick={prevSlide}>‹</button>
        <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}>
          {productos.slice(0, maxProductos).map(produ => (
            <div className={`card ${styles.cardProducto}`} key={produ.id}>
              {produ.en_oferta && (
                <div className={styles.offerTag}>
                  <span>{Math.round(produ.porcentaje_descuento)}% OFF</span>
                </div>
              )}
              <Link to={`/productos/${produ.id}`}>
                <img src={produ.imagen_url} className={styles.cardImg} alt={produ.nombre} />
              </Link>
              <div className={styles.cardBody}>
                <Link to={`/productos/${produ.id}`} style={{ textDecoration: 'none', color: 'green', fontWeight: 'bold', fontSize: '26px' }}>
                  {produ.nombre}
                </Link>
                <div className={styles.priceContainer}>
                  {produ.en_oferta ? (
                    <>
                      <p className={styles.cardPrecioOriginal}>{formatPrice(produ.precio)}</p>
                      <p className={styles.cardPrecioDescuento}>{formatPrice(produ.precio_final)}</p>
                    </>
                  ) : (
                    <p className={styles.cardPrecio}>{formatPrice(produ.precio)}</p>
                  )}
                </div>
                <div className={styles.buttonContainer}>
                  <button className={styles.botonRecomendaciones} onClick={() => handleAddToCart(produ)}>
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.nextButton} onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

export default ProductosRecomendados;
