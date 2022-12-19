import IMAGES from '../../Images/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <>
        <Container>
        <Row>
            <Col xs="12" md="12" lg="12">
                <div className="tyre__brands">
                    <img src={IMAGES.brandsImage} className="brand__image" alt="tyres"/>
                </div>
            </Col>
        </Row>
        </Container>
       
        

            <div className="footer__bottom mt-5">
            <Container>
                    <p>Copyright © 2021 Tyres on Site </p>
                    <p><a className="footer__link" target="_blank" rel='noreferrer' href="https://benjaminthedev.github.io/">Made By BenjaminTheDev</a></p>
            </Container>
            </div>

        </>
    )
}

export default Footer
