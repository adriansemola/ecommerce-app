import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { useAddOrder } from '../hooks/useAddOrders'
import Spinner from './Spinner'
import { ToastContainer, toast } from 'react-toastify';
import '../index.css';
const Checkout = () => {
  const { cart } = useContext(CartContext)
  const { isLoading, save, orderId } = useAddOrder()
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");

  const clickHandle = (event) => {
    event.preventDefault();
    var error = false
    if (email !== emailConfirm) {
      toast.error("Los emails ingresados no coinciden.")
      error = true
    }

    if (!email) {
      toast.error("Debe ingresar el mail.")
      error = true
    }
    if (!emailConfirm) {
      toast.error("Debe confirmar el mail.")
      error = true
    }

    if (!nombre) {
      toast.error("Debe ingresar el nombre.")
      error = true
    }
    if (!telefono) {
      toast.error("Debe ingresar el teléfono.")
      error = true
    }
    document.documentElement.scrollTo(0, 0);
    if (!error)
      save(nombre, email, telefono)

  }
  if (isLoading)
    return <Spinner />

  if (orderId)
    return <h3 className="m-3">Se generó la orden: {orderId}</h3>

  if (cart.length === 0) {
    return (
      <>
        <h3>Aún no ha agregado productos</h3>
        <div className="row justify-content-center">
          <Link to="/" className="btn col-2 btn-dark bg-gradient w-100 mt-3">Productos</Link>
        </div>
      </>
    )
  } else {
    return (
      <div className="container text-center">
        <h2 className="mb-4">Checkout</h2>
        <ToastContainer />
        <form onSubmit={clickHandle}>
          <div className="d-flex justify-content-center">
            <div className="form-group col-6 mt-2">
              <label htmlFor="exampleFormControlInput1">Nombre:</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" id="nombre" placeholder="Ingrese el nombre" />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div className="form-group col-6 ">
              <label htmlFor="exampleFormControlInput3">Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="name@example.com" />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div className="form-group col-6 ">
              <label htmlFor="exampleFormControlInput3">Confirmar Email:</label>
              <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} className="form-control" id="emailConfirm" placeholder="name@example.com" />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div className="form-group col-6 ">
              <label htmlFor="exampleFormControlInput2">Telefono:</label>
              <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="form-control" id="telefono" placeholder="Ingrese el telefono" />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5 ">
            <input type="submit" value="Enviar"  className="btn btn-dark bg-gradient "  />
          </div>
        </form>
      </div>
    )
  }
}

export default Checkout
