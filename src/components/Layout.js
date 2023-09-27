import NavBar from './NavBar';

import { useGetCategories } from '../hooks/useGetCategories';

function Layout({contador,children}) {
  const { categorias, isLoading } = useGetCategories();
  if (isLoading) {
    return <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="spinner-border spinner-border-md" role="status">
      </div>
    </div>
  }

  return (
    <div style={{ height: "100vh"}}>
      <NavBar cartCount={contador} categorias={categorias} />
      <div style={{ marginTop: "5rem"}}>
      {children}
      </div>
    </div>

  );
}

export default Layout;
