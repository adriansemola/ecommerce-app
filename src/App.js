import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import { useEffect, useState } from 'react';
import mockService from './mock/mockService';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [contador,setContador]=useState(0)
  const [categorias, setDatos] = useState(null);

  useEffect(() => {
    // Simula una solicitud al servicio
    const response = mockService.getCategories;

    setDatos(response);}, []);
    if (!categorias) {
      return <div>No hay categorias disponibles.</div>;
    }

  return (
    <div className="App">
      <NavBar cartCount={contador} name="ReCuerda" categorias={categorias}/>
      <Routes>

      {categorias.map((option,index)=>
        <Route key={index}  path={"/"+option} element={<ItemListContainer callback={setContador} contador={contador} categoria={option}/>} />
      )}
      <Route   path="/" element={<ItemListContainer element={setContador} contador={contador}/>} />

      </Routes>
    </div>

  );
}

export default App;
