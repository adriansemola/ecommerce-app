import Brand from './Brand'
import MenuOption from './MenuOption'
import CartWidget from './CartWidget';

const NavBar = ({ cartCount, categorias }) => {
  return (
    <nav className="shadow navbar fixed-top navbar-expand-lg bg-black bg-gradient mb-2" data-bs-theme="dark" >
      <div className="container-fluid">
        <Brand />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo02">
          <MenuOption categorias={categorias} />
          <CartWidget  cartCount={cartCount} />
        </div>
      </div>
    </nav>
  )
}
export default NavBar