import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import BannerSection from "../banner";

function EventPage() {
    return (
        <>
            <BannerSection title="Events"/>

            <section className="event-bg">
                <Container className="space100">
                    <Row className="mb-4">
                        <Col md={6} className="course-count align-items-center">
                            <div className="w-100">
                                <p className="m-0">We found 104 courses available for you</p>
                            </div>
                        </Col>
                        <Col md={6} className="text-end">
                            <div className="w-100">
                                <select className="select-course">
                                    <option>Event Type:All</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by lates</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>10</span>
                                    <p>April,2022</p>
                                    <div className="time">
                                        10:30AM - 12:30PM
                                    </div>
                                    <h3>
                                        <a>A Better Alternative To <br/>
                                            Grading Writing
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>14</span>
                                    <p>February,2022</p>
                                    <div className="time">
                                        12:00AM - 01:30PM
                                    </div>
                                    <h3>
                                        <a>12 Things Successful <br/>
                                            Mompreneurs
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>26</span>
                                    <p>March,2022</p>
                                    <div className="time">
                                        01:30AM - 02:00PM
                                    </div>
                                    <h3>
                                        <a>Ethics in AI Live Event<br/>
                                            Machines Judging.
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}  className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>19</span>
                                    <p>April,2022</p>
                                    <div className="time">
                                        03:00AM - 04:30PM
                                    </div>
                                    <h3>
                                        <a>The Importance Of <br/>
                                            Intrinsic Motivation.
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Find Out More
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>13</span>
                                    <p>August,2022</p>
                                    <div className="time">
                                        09:00AM - 10:30PM
                                    </div>
                                    <h3>
                                        <a>Learning Counsel Digital<br/>
                                            Transition Discussion
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>15</span>
                                    <p>January,2022</p>
                                    <div className="time">
                                        10:30AM - 11:00PM
                                    </div>
                                    <h3>
                                        <a>Computing Education <br/>
                                            Practice Conference 2022
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>24</span>
                                    <p>July,2022</p>
                                    <div className="time">
                                        10:30AM - 12:30PM
                                    </div>
                                    <h3>
                                        <a>Istanbul Teachings of <br/>
                                            the event for Eshooling
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>18</span>
                                    <p>May,2022</p>
                                    <div className="time">
                                        10:30AM - 12:30PM
                                    </div>
                                    <h3>
                                        <a>Our Excellence Partner <br/>
                                            France Pavilion
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>10</span>
                                    <p>June,2022</p>
                                    <div className="time">
                                        10:30AM - 12:30PM
                                    </div>
                                    <h3>
                                        <a>Ecosystem dynamics <br/>
                                            and conservation
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>23</span>
                                    <p>January,2022</p>
                                    <div className="time">
                                        10:30AM - 12:30PM
                                    </div>
                                    <h3>
                                        <a>Istanbul Teachings of <br/>
                                            the event for Eshooling
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>07</span>
                                    <p>March,2022</p>
                                    <div className="time">
                                        10:30AM - 12:30PM
                                    </div>
                                    <h3>
                                        <a>Ethics in AI Live Event<br/>
                                            Machines Judging.
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="col-12 event">
                            <div className="w-100">
                                <div className="event-card bg-white">
                                    <span>19</span>
                                    <p>September,2022</p>
                                    <div className="time">
                                        10:30AM - 12:30PM
                                    </div>
                                    <h3>
                                        <a>Machine Learning Night<br/>
                                            Fastaily Part 1
                                        </a>
                                    </h3>
                                    <div className="location d-flex">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>New York, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="more-about">Get Ticket
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
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
                                <i className="ms-2 fas fa-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default EventPage;