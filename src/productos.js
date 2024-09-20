import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './css/productosCategorias.module.css';
import CartDrawer from './cartDrawer';
import { CartContext } from './cartContext';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/productos/')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleAddToCart = (product) => {
    const productoConDescuento = {
      ...product,
      precio: product.precio, // Siempre mantiene el precio original
      precio_final: product.en_oferta && product.precio_final && !isNaN(product.precio_final)
      ? product.precio_final
      : product.precio,
    };
    addToCart(productoConDescuento);
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

  // Lógica de paginación
  const totalProductos = sortedProductos.length;
  const totalPages = Math.ceil(totalProductos / productosPorPagina);
  const startIndex = (currentPage - 1) * productosPorPagina;
  const selectedProducts = sortedProductos.slice(startIndex, startIndex + productosPorPagina);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (!Array.isArray(productos) || productos.length === 0) {
    return <p>No hay productos en oferta disponibles.</p>;
  }

  return (
    <div>
      
      <div className={styles.containerGrande}>
        
        <div className={styles.container}>
          <div className={styles.productosSection}>
            <h2 className={styles.tituloCategoria}>Alimentos</h2>
    
            <div className={styles.row}>
              {productos.length > 0 ? (
                selectedProducts.map(produ => (
                  <ProductCard
                    key={produ.id}
                    producto={produ}
                    handleAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <p>No hay productos disponibles en la categoría de alimentos.</p>
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
        </div>
      </div>
    </div>
  );
};

export default Productos;
