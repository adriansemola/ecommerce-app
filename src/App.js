import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartWiew';
import Checkout from './components/Checkout';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <CartProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="categoria/:categoria" element={<ItemListContainer/>} />
            <Route exact path="/cart" element={<CartView/>} />
            <Route exact path="/checkout" element={<Checkout/>} />
          </Routes>
        </Layout>
      </CartProvider>
    </>
  );
}

export default App;
