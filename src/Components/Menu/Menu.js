
import { Link } from "react-router-dom";
import './Menu.css';


const Menu = () => {
    
    


    return (
        
        <div className="desktop__menu">
        {/* This is the desktop menu. */}
                <nav className="menu__nav">
                    <ul className="menu__ul">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/tyres">Tyres</Link>
                        </li>  
                        <li>
                            <Link to="/service">Services</Link>
                        </li>
                        <li>
                            <Link to="/bookonline">Book Online</Link>
                        </li>
                        {/* Hiding this for now and then will add it later */}
                        {/* <li>
                            <Link to="/contact">Contact</Link>
                        </li>  */}
                        <li>
                            <a className="menu-link callNow" href="tel:+447377867222" target="_self">Call Now</a>
                        </li>                                               
                    </ul>
                </nav>   
            </div>            
        
        
    )
}

export default Menu