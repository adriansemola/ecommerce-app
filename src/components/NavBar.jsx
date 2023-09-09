import Brand from './Brand'
import MenuOption from './MenuOption'
import CardWidget from './CardWidget';

const NavBar = ({ name, cartCount, categorias }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
      <div className="container-fluid">
        <Brand />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <MenuOption options={categorias} />
          <CardWidget cartCount={cartCount} />
        </div>
      </div>
    </nav>
  )
}
export default NavBar