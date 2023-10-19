import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, quitarItem, montoFinal, montoTotalDetalle, limpiar } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <h3>Aún no ha agregado productos</h3>
        <div className="row justify-content-center">
          <Link to="/" className="btn col-2 btn-dark bg-gradient w-100 mt-3">Productos</Link>
        </div>
      </>
    );
  }

  return (
    <div className="container ">
      <div className="card-body">
        {cart.map((detalle, index) => (
          <div key={index} className="card shadow p-2 d-flex align-items-center mt-2">
            <div className="flex-row d-flex">
              <div className="flex-column">
                <div className="d-flex mt-3">
                  <div className="col-lg-1  col-3">
                    <img className="img-fluid rounded-start" src={detalle.imgUrl} alt={detalle.name} />
                  </div>
                  <div className="flex-column p-2">
                  <p className="card-text">Producto:{detalle.name}</p>

                    <p className="card-text">Cantidad: {detalle.cantidad}</p>
                    <p className="card-text">Precio unitario:  {detalle.precio.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                      currencyDisplay: 'symbol'
                    })}</p>
                    <p className="card-text">SubTotal: {montoTotalDetalle(detalle.id).toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                      currencyDisplay: 'symbol'
                    })}</p>
                  </div>
                </div>
              </div>
              <div className="flex-column d-flex justify-content-center align-items-center">
                <button
                  onClick={() => quitarItem(detalle.id)}
                  className="btn btn-danger btn-block p-3">
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="row mt-3 text-center">
          <strong>Total: {montoFinal().toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
            currencyDisplay: 'symbol'
          })} </strong>
        </div>
        <div className="row justify-content-center mt-3">
          <button type="button" className="btn col-lg-2 col-6 btn-danger bg-gradient" onClick={() => limpiar()}>Limpiar Carrito</button>
        </div>
        <div className="row justify-content-center">
          <Link to="/checkout" className="btn col-2 btn-dark bg-gradient w-100 mt-3">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
