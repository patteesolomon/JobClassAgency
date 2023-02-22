import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Merch() {
    const nav = useNavigate();
    
    return(
        
        <div>
            
            Hadar!!!
            <Link to={nav('/')}>Merch</Link>
            
        </div>
    )
}
