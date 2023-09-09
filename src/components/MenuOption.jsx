import Option from "./Option"

const MenuOption=({options})=>{
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {options.map((option,index)=>(  
        <li key= {index}className="nav-item" >
          <Option name={option}/>
        </li>))}
      </ul>
    )
}
export default MenuOption