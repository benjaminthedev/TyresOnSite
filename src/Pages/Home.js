import IMAGES from '../Images/index';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

import {Helmet} from "react-helmet";





const Home = () => {
    return (
    <>
        <div className="book__online">
        <Helmet>
            {/* <script type="text/javascript" src="//tyresonsite-embed.tyresurf.co.uk/js/embed.js"></script> */}
            <p>Online Booking Coming Soon.</p>
        </Helmet>
        <p className="text-center mt-3">Welcome to our new website! Please enter your registration below to find the right tyres at the best price for your vehicle!</p>
         {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://tyresonsite-embed.tyresurf.co.uk' data-origin='https://tyresonsite-embed.tyresurf.co.uk' id='ts-embed' width='100%' height='' scrolling='no' style='overflow:hidden;' frameborder='0' ></iframe>"}} /> */}
         {/* <p className="text-center mt-3">Online Booking Coming Soon.</p> */}
        </div>


         <Container className="home__content  mb-2 ">
            <section className="about__us mb-5">
                    <h1 className="text-center">Our Company</h1>
                    <div className="header-border-small"></div>

                    <p className="text-center">With over 20 years of experience in our trade, Tyres On Site offer a friendly and professional mobile tyre fitting service straight to your door.  Covering Kent, Orpington, Bromley, Sevenoaks and the surrounding areas our fully equipped vans and trained personal fitters repairing or replacing your tyres at home, work or even when you’re at the gym or playing golf.</p>

                    <p className="text-center">Never again waste time and money visiting the garage as we deliver our expertise straight to your doorstep.  Convenient and affordable, we come to you wherever you need us.</p>
            </section>            
        </Container> 



      
        <div className="Carousel__Wrapper">
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={IMAGES.rotationDarkImage}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>20 Years In The Trade</h3>
                    <p>With 20 years of experience in our trade and offering prices that are great value for money, we believe we provide an amazing service for our clients that is of the highest quality.</p>
                    
                    <Button variant="danger" className="mb-3">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                    </Button>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={IMAGES.stackTyreDarkImage}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Mobile Tyre Fitting</h3>
                    <p> Tyres On Site supply top brand tyres as well as mid-range and budget alternatives, so whatever your budget we can find the right tyres for you. Ready to fit at home or work and keeping you safe on the road.</p>
                        <Button variant="danger" className="mb-3">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={IMAGES.flatTyreDarkImage}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Puncture Repair</h3>
                    <p>At Tyres On Site we provide puncture repair service which includes the cost of the repair, our mobile service, a new valve, balancing of the wheel</p>
                        <Button variant="danger" className="mb-3">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>



      <Container>
            <div className="container mt-5">

            <h3 className="text-center mb-3">Our Services</h3>
            <div className="header-border"></div>
                
            <Row>
                <Col xs="12" md="6" lg="6" className="mt-5">    
                    <div className="feature__imageItem">
                        <Image src={IMAGES.tyreImage} className="feature__imageItemImage" alt="tyres" rounded/>
                        <h4 className="text-center mt-4">Mobile Tyre Fitting</h4>
                        
                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                    </div>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5">
                    <div className="feature__imageItem">
                        <Image src={IMAGES.flatImage} className="feature__imageItemImage" alt="tyres" rounded/>
                        <h4 className="text-center mt-4" >Puncture Repair</h4>
                        
                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                    </div>                      
                </Col>
            </Row>

            <Row>
                <Col xs="12" md="6" lg="6" className="mt-5">    
                    <div className="feature__imageItem">
                        <Image src={IMAGES.balanceImage} className="feature__imageItemImage" alt="tyres" rounded/>
                        <h4 className="text-center mt-4">Wheel Balancing</h4>
                        
                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                        
                    </div>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5">
                    <div className="feature__imageItem">
                        <Image src={IMAGES.thumbsupImage} className="feature__imageItemImage" alt="tyres" rounded/>
                        <h4 className="text-center mt-4">Pre-MOT Checks</h4>
                        
                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                    </div>                      
                </Col>
            </Row>

            <Row>
                <Col xs="12" md="6" lg="6" className="mt-5">    
                    <div className="feature__imageItem">
                        <Image src={IMAGES.winterTyresImage} className="feature__imageItemImage" alt="tyres" rounded/>
                        <h4 className="text-center mt-4">Seasonal Re-fit</h4>
                        
                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                    </div>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5">
                    <div className="feature__imageItem">
                        <Image src={IMAGES.tyreRotationImage} className="feature__imageItemImage" alt="tyres" rounded/>
                        <h4 className="text-center mt-4">Tyre Rotation</h4>
                        
                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                    </div>                      
                </Col>
            </Row>                         
        </div>
                
        <Row>
            <Col xs="12" md="6" lg="6">
                
            </Col>
        </Row> 
</Container>






<div className="Carousel__Wrapper mt-5 mb-5">
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={IMAGES.rotationDarkImage}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Book In With Us</h3>
                    <p>Like what you see with us at Tyres on Site, well book in with us now and we'll look forward to seeing you very soon!</p>
                    
                    <Button variant="danger" className="mb-3">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                    </Button>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={IMAGES.stackTyreDarkImage}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Mobile Tyre Fitting</h3>
                    <p> Tyres On Site supply top brand tyres as well as mid-range and budget alternatives, so whatever your budget we can find the right tyres for you. Ready to fit at home or work and keeping you safe on the road.</p>
                        <Button variant="danger" className="mb-3">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={IMAGES.flatTyreDarkImage}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Puncture Repair</h3>
                    <p>At Tyres On Site we provide puncture repair service which includes the cost of the repair, our mobile service, a new valve, balancing of the wheel</p>
                        <Button variant="danger" className="mb-3">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div> 


        </>
    )
}

export default Home;
