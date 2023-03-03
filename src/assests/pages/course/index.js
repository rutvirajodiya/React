import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BannerSection from "../banner";

function CoursePage() {
    return (
        <>
            <BannerSection title="Course Grid"/>

            <section className="event-bg">
                <Container className="space100">
                    <Row className="shorting-course">
                        <div className="col-md-2 filter align-self-center">
                            <div className="w-100">
                                <i className="fas fa-abacus"></i>
                                <p>Filters</p>
                            </div>
                        </div>
                        <div className="col-lg-10 align-self-center">
                            <div className="w-100">
                                <div className="row">
                                    <div className="col-lg-3 col-12">
                                        <select className="selection">
                                            <option>All Categories</option>
                                            <option>Sort by popularity</option>
                                            <option>Sort by average rating</option>
                                            <option>Sort by lates</option>
                                            <option>Sort by price: low to high</option>
                                            <option>Sort by price: high to low</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-12">
                                        <select className="selection">
                                            <option>All Language</option>
                                            <option>Sort by popularity</option>
                                            <option>Sort by average rating</option>
                                            <option>Sort by lates</option>
                                            <option>Sort by price: low to high</option>
                                            <option>Sort by price: high to low</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-12">
                                        <select className="selection">
                                            <option>All Prices</option>
                                            <option>Sort by popularity</option>
                                            <option>Sort by average rating</option>
                                            <option>Sort by lates</option>
                                            <option>Sort by price: low to high</option>
                                            <option>Sort by price: high to low</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-12">
                                        <select className="selection">
                                            <option>All Skills</option>
                                            <option>Sort by popularity</option>
                                            <option>Sort by average rating</option>
                                            <option>Sort by lates</option>
                                            <option>Sort by price: low to high</option>
                                            <option>Sort by price: high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <Col lg={4} md={6}>
                            <div className="w-100">
                                <div className="study bg-white">
                                    <div className="study-img">
                                        <img src="image/study1.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="study-content">
                                        <h4><a href="#">The Most Complete Design <br/> Thinking Course On The Market.</a></h4>
                                        <ul className="d-flex justify-content-start p-0">
                                            <li className="d-flex">
                                                <i className="fas fa-book me-1"></i>
                                                10 Lesson
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-clock me-1"></i>
                                                5h 24m
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-user me-1"></i>
                                                Justin Case
                                            </li>
                                        </ul>
                                        <ul className="d-flex ratting justify-content-between">
                                            <li className="d-flex">
                                                <span>4.5</span>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                (101)
                                            </li>
                                            <li>
                                                $34.00
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="w-100">
                                <div className="study bg-white">
                                    <div className="study-img">
                                        <img src="image/study2.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="study-content">
                                        <h4><a href="#">Everything You Need to Know  <br/>  About Business.</a></h4>
                                        <ul className="d-flex justify-content-start p-0">
                                            <li className="d-flex">
                                                <i className="fas fa-book me-1"></i>
                                                10 Lesson
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-clock me-1"></i>
                                                5h 24m
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-user me-1"></i>
                                                Justin Case
                                            </li>
                                        </ul>
                                        <ul className="d-flex ratting justify-content-between">
                                            <li className="d-flex">
                                                <span>4.0</span>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                (235)
                                            </li>
                                            <li>
                                                $89.00
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="w-100">
                                <div className="study bg-white">
                                    <div className="study-img">
                                        <img src="image/study3.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="study-content">
                                        <h4><a href="#">Statistics Data Scince and <br/> Business Analysis</a></h4>
                                        <ul className="d-flex justify-content-start p-0">
                                            <li className="d-flex">
                                                <i className="fas fa-book me-1"></i>
                                                10 Lesson
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-clock me-1"></i>
                                                5h 24m
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-user me-1"></i>
                                                Justin Case
                                            </li>
                                        </ul>
                                        <ul className="d-flex ratting justify-content-between">
                                            <li className="d-flex">
                                                <span>4.5</span>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                (101)
                                            </li>
                                            <li>
                                                $39.00
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="w-100">
                                <div className="study bg-white">
                                    <div className="study-img">
                                        <img src="image/study4.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="study-content">
                                        <h4><a href="#">Become a UI/UX Designer <br/> Everything You need To Know.</a></h4>
                                        <ul className="d-flex justify-content-start p-0">
                                            <li className="d-flex">
                                                <i className="fas fa-book me-1"></i>
                                                10 Lesson
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-clock me-1"></i>
                                                5h 24m
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-user me-1"></i>
                                                Justin Case
                                            </li>
                                        </ul>
                                        <ul className="d-flex ratting justify-content-between">
                                            <li className="d-flex">
                                                <span>3.5</span>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                (101)
                                            </li>
                                            <li>
                                                $89.00
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="w-100">
                                <div className="study bg-white">
                                    <div className="study-img">
                                        <img src="image/study5.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="study-content">
                                        <h4><a href="#">Learn Essentials of User Interface <br/>Design in Figma.</a></h4>
                                        <ul className="d-flex justify-content-start p-0">
                                            <li className="d-flex">
                                                <i className="fas fa-book me-1"></i>
                                                10 Lesson
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-clock me-1"></i>
                                                5h 24m
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-user me-1"></i>
                                                Justin Case
                                            </li>
                                        </ul>
                                        <ul className="d-flex ratting justify-content-between">
                                            <li className="d-flex">
                                                <span>4.5</span>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                (101)
                                            </li>
                                            <li>
                                                $54.00
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="w-100">
                                <div className="study bg-white">
                                    <div className="study-img">
                                        <img src="image/study6.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="study-content">
                                        <h4><a href="#">AWS Certified Solutions <br/> Architect Associate.</a></h4>
                                        <ul className="d-flex justify-content-start p-0">
                                            <li className="d-flex">
                                                <i className="fas fa-book me-1"></i>
                                                10 Lesson
                                            </li>
                                            <li className="d-flex">
                                                <i className="far fa-clock me-1"></i>
                                                5h 24m
                                            </li>
                                            
                                            <li className="d-flex">
                                                <i className="far fa-user me-1"></i>
                                                Justin Case
                                            </li>
                                        </ul>
                                        <ul className="d-flex ratting justify-content-between">
                                            <li className="d-flex">
                                                <span>4.0</span>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                (101)
                                            </li>
                                            <li>
                                                $79.00
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <ul className="d-flex back-pagination justify-content-center">
                        <li>
                            <a href="#">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default CoursePage;