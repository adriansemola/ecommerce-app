import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Layout from './components/Layout';
import { useState } from 'react';
import { useGetCategories } from './hooks/useGetCategories';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [contador, setContador] = useState(0)
  const { categorias, isLoading } = useGetCategories();
  if (isLoading) {
    return <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="spinner-border spinner-border-md" role="status">
      </div>
    </div>
  }

  const modificaContador = (valor) => {
    setContador(contador + valor)
  }
  return (
    <div className="App">
      <Layout contador={contador}>
      <Routes>
        <Route exact path="/" element={<ItemListContainer modificaContador={modificaContador} />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer modificaContador={modificaContador} />} />

        {categorias.map((option, index) =>
          <Route key={index} exact path="categoria/:categoria" element={<ItemListContainer modificaContador={modificaContador} />} />
        )}

      </Routes>

      </Layout>

    </div>


  );
}

export default App;
