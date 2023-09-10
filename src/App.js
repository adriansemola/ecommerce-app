import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import mockService from './mock/mockService';

function App() {
  const [categorias, setDatos] = useState(null);

  useEffect(() => {
    // Simula una solicitud al servicio
    const response = mockService.getCategories;
    setDatos(response);
  }, []);
  if (!categorias) {
    return <div>No hay categorias disponibles.</div>;
  }

  return (
    <div className="App">
      <NavBar cartCount={0} categorias={categorias} />
      <ItemListContainer greating="Bienvenidos"/>
    </div>

  );
}

export default App;
