import { NavLink } from 'react-router-dom';

const Option = ({ name }) => {
  return (
    <>
      <NavLink className="nav-link" style={{textTransform: "capitalize"}}to={"/categoria/" + name}>{name}</NavLink>
    </>
  )
}
export default Option