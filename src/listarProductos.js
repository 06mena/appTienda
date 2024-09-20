import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './css/listarProductos.module.css';
import CartDrawer from './cartDrawer';
import { CartContext } from './cartContext';

const ListarProductos = ({ maxProductos, sortOption }) => {
  const [productos, setProductos] = useState([]);
  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  useEffect(() => {
    axios.get('https://apptiendaback-1.onrender.com/api/productos/')
      .then(response => {
        let productosObtenidos = response.data;

        // Mezclar productos para obtener productos al azar
        productosObtenidos = shuffleArray(productosObtenidos);

        // Limitar a la cantidad deseada de productos
        const productosLimitados = maxProductos ? productosObtenidos.slice(0, maxProductos) : productosObtenidos;
        setProductos(productosLimitados);
      })
      .catch(error => console.error(error));
  }, [maxProductos]);

  // Función para mezclar los productos aleatoriamente
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setIsCartDrawerOpen(true);
  };

  const closeCartDrawer = () => {
    setIsCartDrawerOpen(false);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  // Calcular el subtotal del carrito
  const cartSubtotal = cart.reduce((total, item) => total + (item.precio * item.quantity), 0);

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    return numericPrice.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  const calculateDiscount = (originalPrice, discountedPrice) => {
    const original = parseFloat(originalPrice);
    const discounted = parseFloat(discountedPrice);
    if (isNaN(original) || isNaN(discounted) || original === 0) return 0;
    return Math.round(((original - discounted) / original) * 100);
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {productos.length > 0 ? (
          productos.map(produ => {
            const originalPrice = produ.precio || 0;
            const discountedPrice = produ.precio_final || originalPrice;
            const discountPercentage = produ.en_oferta ? calculateDiscount(originalPrice, discountedPrice) : 0;

            return (
              <div className={`${styles.cardProducto} ${produ.en_oferta ? styles.productoConDescuento : ''}`} key={produ.id}>
                {produ.en_oferta && (
                  <div className={styles.offerTag}>
                    <span>{discountPercentage}% OFF</span>
                  </div>
                )}
                <Link to={`/productos/${produ.id}`}>
                  <img src={produ.imagen_url} className={styles.cardImg} alt={produ.nombre} />
                </Link>
                <div className={styles.cardBody}>
                  <Link to={`/productos/${produ.id}`} className={styles.cardText}>
                    {produ.nombre}
                  </Link>
                  <div className={styles.priceContainer}>
                    {produ.en_oferta ? (
                      <>
                        <p className={styles.cardPriceOriginal}>
                          <del>{formatPrice(originalPrice)}</del>
                        </p>
                        <p className={styles.cardPrecio}>{formatPrice(discountedPrice)}</p>
                      </>
                    ) : (
                      <p className={styles.cardPrecioVerde}>{formatPrice(originalPrice)}</p>
                    )}
                  </div>
                  <div className={styles.buttonContainer}>
                    <button className={styles.botonOferta} onClick={() => handleAddToCart(produ)}>
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={closeCartDrawer}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        subtotal={cartSubtotal}
      />
    </div>
  );
};

export default ListarProductos;
