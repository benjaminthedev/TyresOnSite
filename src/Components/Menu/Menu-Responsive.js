import React, {useState} from "react";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import IMAGES from '../../Images/index';

const MenuResponsive = () => {
    //Add state using hooks
    const [isOpen, setOpen] = useState(false);


    return (
    <Container className="responsive__menu">

         <Hamburger 
            toggled={isOpen} 
            toggle={setOpen}  
            easing="ease-in" 
            color="#dc3545"
            direction="right"
            />
        <Row>
    <img src={IMAGES.logoTyres} className="header__logoMainResponsive" alt="tyres"/>
            
            {/* Mobile Nav */}
            {isOpen &&  
                <ul class="hamburger__menuResponsive">
                    <li>
                        <Link onClick={() => setOpen(false)} to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(false)} to="/about">About</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(false)} to="/tyres">Tyres</Link>
                    </li>  
                    <li>
                        <Link onClick={() => setOpen(false)} to="/service">Services</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(false)} to="/bookonline">Book Online</Link>
                    </li>
            
                    <li>
                        <a className="menu-link callNow" href="tel:+447377867222" target="_self">Call Now</a>
                    </li>                              
                </ul>
            } 

        </Row>
        
            
    </Container>
    )
}

export default MenuResponsive
