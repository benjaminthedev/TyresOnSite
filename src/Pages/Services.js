import React from 'react'
import IMAGES from '../Images/index'
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Services = () => {
    return (
        <>
        <Container>
        <div className="about__page mb-5">
            <h1 className="text-center mt-5">Services</h1>
             <div className="header-border-small"></div>   

             <p className="text-center">Tyres are our passion and we want to make the days of queueing up in the garage a thing of the past.  We offer a wide variety of services to suit all levels of budget and we will beat like-for-like.  Take a look at what we offer and our prices and we hope to see you very soon!</p>  

            <Button variant="danger" className="mb-3 blockBtn">
                <Link to="/bookonline" className="cta__button">Book In Now</Link>
            </Button>

            <Row>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                                           <h3 className="text-center">Mobile Tyre Fitting</h3>

                    <p >Tyres On Site supply top brand tyres as well as mid-range and budget alternatives, so whatever your budget we can find the right tyres for you. Ready to fit at home or work and keeping you safe on the road.</p>

                    <p className="price__from">From £17.50</p>
                        <br />
                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <Image src={IMAGES.tyreImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5mb-5">
                    <Image src={IMAGES.flatImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                         <h3 className="text-center">Puncture Repair</h3>
                    <p>Punctures can happen to anyone, anywhere and usually at the least convenient time. So let us help relieve the stress.

                        With our mobile puncture repair service and get your safely back on your way. At Tyres On Site we provide puncture repair service which includes the cost of the repair, our mobile service, a new valve, balancing of the wheel.</p>

                        <p className="price__from">From £35</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                                     <h3 className="text-center">Wheel Balancing</h3>

                    <p>If wheels are out of balance they generally produce a vibration that is uncomfortable to the driver and results in premature wearing of tyres, suspension and steering components. Tyres On Site correct wheel balancing which improves road holding and maximises the life of tyres. We offer FREE wheel balancing when you have new tyres fitted, or we can come to you and balance your wheel for as little as £7.99 per wheel.</p>
                    <p className="price__from">From £7.99</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                     <Image src={IMAGES.balanceImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>



                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                     <Image src={IMAGES.thumbsupImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <h3 className="text-center">Pre-MOT Checks</h3>

                    <p>40% of cars fail their MOT test the first time due to minor faults that can easily be spotted and sorted out before the test. One of the most common reasons for MOT failures are worn or cracked tyres. Let Tyres On Site give you confidence in the performance of your tyres and ensure they are MOT safe and legal.</p>

                    <p className="price__from">From £35</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>















                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                                     <h3 className="text-center">Wheel Balancing</h3>

                    <p>If wheels are out of balance they generally produce a vibration that is uncomfortable to the driver and results in premature wearing of tyres, suspension and steering components. Tyres On Site correct wheel balancing which improves road holding and maximises the life of tyres. We offer FREE wheel balancing when you have new tyres fitted, or we can come to you and balance your wheel for as little as £7.99 per wheel.</p>
                    <p className="price__from">From £7.99</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                     <Image src={IMAGES.balanceImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>







                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                     <Image src={IMAGES.winterTyresImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>
            <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <h3 className="text-center">Seasonal Re-fit</h3>
                    <p>We all know the weather can suddenly change so for your peace of mind and safety we can quickly and easily change your winter or summer tyres wherever you are. Increasing numbers of drivers are choosing seasonal re-fits to make sure they have the best tyres to deal with changeable weather conditions. We advise you have a cool, stable environment to store your spare set while they’re out of action.</p>

                    <p className="price__from">From £69</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>




            <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <h3 className="text-center">Tyre Rotation</h3>

            
                    <p>To extend the overall life of a set of tyres we advise they are moved from one position to another on your vehicle.Our mobile tyre fitting technicians can carry out this service at your home or work saving you time and money. Rotating your tyres can ensure even wear and consistent performance, but should only ever be seen as a short-term solution.</p>
                    

                    <p className="price__from">From £69</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                     <Image src={IMAGES.tyreRotationImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>



                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                     <Image src={IMAGES.tyreFixImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>
            <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                                        <h3 className="text-center">Locking Wheel Nut Removal</h3>
                    
                    <p>If you can’t find your key, or if your locking wheel nuts are damaged and the key can’t remove them, fear not! We can remove up to 4 locking wheel nuts during tyre repair or replacement using our specialist equipment without damaging alloys. Even if you don’t need new tyres, we can come to you and remove the damaged or over tightened locking wheel nuts.</p>

                    <p className="price__from">From £49</p>

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

export default Services
