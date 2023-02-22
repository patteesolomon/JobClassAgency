import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {React} from "react";

class Clubs extends React.Component{

    render(){
        return (
        <div>
            <p>this is a nightmare</p>
            <Link to={`/`}>Clubs</Link>
        </div>
    )
    }
    
}

module.exports = Clubs;

