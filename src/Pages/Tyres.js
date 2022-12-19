import IMAGES from '../Images/index'
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Tyres = () => {
    return (


        <>
        <Container>
        <div className="about__page mb-5">
            <h1 className="text-center mt-5">Tyres</h1>
             <div className="header-border-small"></div>     


            <Row>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                        <h3>Car Tyres</h3>

                    <p>Tyres On Site supply top brand tyres as well as mid-range and budget alternatives, so whatever your budget we can find the right tyres for you. Ready to fit at home or work and keeping you safe on the road.</p>
                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <Image src={IMAGES.carTyresImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5mb-5">
                    <Image src={IMAGES.motorCycleTyres} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <h3>Motorcycle Tyres</h3>
                    <p>Tyres On Site offer a wide range of motorcycle tyres, from touring to racing and from small to large motorcycles.</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                      <h3>Motorhome Tyres</h3>
                    <p>Tyres play a vital role in the overall safety of your motorhome on the road and it is vital to regularly check your motorhome tyres, including the spare, to ensure that they are in good condition.</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                     <Image src={IMAGES.motorHomeImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>




                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                     <Image src={IMAGES.classicCarTyres} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <h3>Classic Car Tyres</h3>

                    <p>When it comes to classic car tyres, we know it’s all about authenticity. If you own a classic car and you want to enhance its look then Tyres On Site can help you select the best vintage tyres for your vehicle.</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>





            </Row>     
        </div>
        </Container>
        </>









        
 
        
      
    )
}

export default Tyres
