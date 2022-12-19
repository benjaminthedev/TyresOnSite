import Menu from "../Menu/Menu";
import ResponsiveMenu from '../Menu/Menu-Responsive'
import './Header.css'
import IMAGES from '../../Images/index';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
    return (
        <>
        <ResponsiveMenu/>
        <Container fluid className="p-0 m-0">
        <div className="header__backgroundImage">
        

        <div className="menu__wrappers">
            <Row>
                <Col xs="12" md="6" lg="6">
                    {/* Spacing */}
                </Col>

                <Col xs="12" md="6" lg="6">
                    <Menu className="clear"/>
                </Col>
            </Row>
        </div>

        {/* Conditional Resonsive Menu */}

          
        <Container>
            <Row>
                <Col xs="12" md={{ span: 6, offset: 3 }} >
                <img src={IMAGES.logoTyres} className="header__logoMain" alt="tyres"/>

                

                <Button variant="danger" className="mb-3">
                      <Link to="/bookonline" className="cta__button">Book In Now</Link>
                </Button>

                <Button variant="danger">
                    <a href="tel:+447377867222" target="_self" className="cta__button">Call Now</a>
                </Button>
                </Col>
            </Row> 
        </Container>

        </div>
        </Container>
</>
    )
}

export default Header
