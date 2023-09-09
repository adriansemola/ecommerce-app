import { NavLink } from 'react-router-dom';

const Option=({name})=>{
    return (
        <>
        <NavLink className="nav-link" to={"/"+name}>{name}</NavLink>
        </>
    )
}
export default Option