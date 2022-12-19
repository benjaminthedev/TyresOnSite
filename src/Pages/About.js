import React from 'react'
import IMAGES from '../Images/index'
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const About = () => {
    return (
        <>
        <Container>
        <div className="about__page mb-5">
            <h1 className="text-center mt-5">About Us</h1>
             <div className="header-border-small"></div>     


            <Row>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                        <h2>Personalised Approach</h2>
                        <p>Our Mobile Tyre-Fitting Service allows our customers to have new tyres fitted or punctures repaired at any location of their choice be it at home, at the gym or the golf club.  Waiting at a garage will be a thing of the past.</p>

                        <p>Tyres might be our passion but we know they might not be yours, so our friendly knowledgeable team are on hand to help you today!!</p>
                        <br />
                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <Image src={IMAGES.mechanicImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5mb-5">
                    <Image src={IMAGES.mixedTyresImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <h2>Our Mission</h2>
                        <p>We’re on a mission to save you time and money without spending your time queueing at a garage while most importantly keeping you safe on the road.  We want you to enjoy your vehicle in the safest, most cost effective and convenient way possible.</p>

                        <p>We provide a friendly premium service to all of our customers and deliver the ultimate in convenience by bringing our expertise straight to your door.  Our aim is to remove the complexities of tyre purchase and fitting, while offering a wide range of brands, with price points to suit all budgets.</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>

                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                    <h2>Why Choose Tyres on Site</h2>
                        <p>We offer great value for money and we promise to beat a life-for-like quote.  We include a new rubber valve, balancing and tyre disposal in each quoted tyre price and mobile fitting is free when you buy two or more tyres.</p>
                        
                        <p>Tyres On Site offer a wide range of services; mobile tyre fitting, mobile puncture repair, seasonal re-fits, tyre rotation, car batteries, motorcycle tyres, vintage car tyres, vintage motorcycle tyres, trailer and motorhome tyres and a lot more.</p>
                        <p>If you still have questions, our specialist advisors are on hand to assist you with all your queries.  Just call us on 07377 867222</p>

                        <Button variant="danger" className="mb-3 blockBtn">
                            <Link to="/bookonline" className="cta__button">Book In Now</Link>
                        </Button>
                </Col>
                <Col xs="12" md="6" lg="6" className="mt-5 mb-5">
                     <Image src={IMAGES.happyCustomerImage} className="feature__imageItemImage" alt="tyres" rounded/>
                </Col>
            </Row>     
        </div>
        </Container>
        </>
    )
}

export default About
