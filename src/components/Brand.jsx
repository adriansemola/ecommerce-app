import { Link } from "react-router-dom"

const Brand=()=>{
    return (
        <div className="navbar-brand bg-dark d-flex align-items-center">
        <img src="favicon.ico" className="rounded"alt="ReCuerda" width="30" height="30">      
            
        </img>
        <Link  to="/" className="navbar-brand p-2">ReCuerda</Link>
        </div>
    )
}
export default Brand