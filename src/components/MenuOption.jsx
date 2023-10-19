import { NavLink } from 'react-router-dom';

const MenuOption = ({ categorias }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      {categorias.map((categoria, index) => (
        <li key={index} className="nav-item" >
      <NavLink className="nav-link" style={{textTransform: "capitalize"}}to={"/categoria/" + categoria}>{categoria}</NavLink>
        </li>))}
    </ul>
  )
}
export default MenuOption