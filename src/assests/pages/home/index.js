import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import AcademicsSection from "../academics";
import CourseSection from "../popularcourse";
import CountSection from "../count";


function HomePage() {
    const services = [
        {
            id: 1,
            name: "product1",
            img: "image/service1.png"
        },
        {
            id: 2,
            name: "product2",
            img: "image/service2.png"
        },
        {
            id: 3,
            name: "product3",
            img: "image/service3.png"
        },
        {
            id: 4,
            name: "product4",
            img: "image/service4.png"
        }
    ];

    const courses = [
        {
            id: 1,
            img: "image/course-1.png",
            list1: "UX Design",
            list2: "24 Lessions",
            heading: "Dave conservatoire is Strategy the Entirely free online.",
            students: "77 students",
            price: "$68"
        },
        {
            id: 2,
            img: "image/course-2.png",
            list1: "UX Design",
            list2: "29 Lessions",
            heading: "Strategy law and Organization foundation.",
            students: "99 students",
            price: "$99"
        },
        {
            id: 3,
            img: "image/course-3.png",
            list1: "UX Design",
            list2: "20 Lessions",
            heading: "Strategy law and Organization foundation.",
            students: "68 students",
            price: "$79"
        },
        {
            id: 4,
            img: "image/course-4.png",
            list1: "UX Design",
            list2: "26 Lessions",
            heading: "Python for Data  Science & Machine Learning",
            students: "84 students",
            price: "$180"
        }
    ];

    const count = [
        {
            id: 1,
            heading: "Successfully Trained",
            number: 1478,
            description: "Enrolled Learners"
        },
        {
            id: 2,
            heading: "Available Courses",
            number: 1730,
            description: "COUNTRYWIDE AWARDS"
        },
        {
            id: 3,
            heading: "Scheduled Events",
            number: 280,
            description: "SUCCESS EVENTS"
        },
        {
            id: 4,
            heading: "Getting Featured on",
            number: 1045,
            description: "ONLINE COURSES"
        }
    ];
    return (
        <>
            <Carousel className="slide">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="image/slider-img1.jpg"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="image/slider-img2.jpg"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className="space100">
                <Container>
                    <div className="title">
                        <h2>Academics</h2>
                        <img src="image/line.png" />
                    </div>
                    <Row className="justify-content-center">
                        {
                            services.map((service, index) => {
                                return <AcademicsSection key={index} item={service} />
                            })
                        }
                    </Row>
                </Container>
            </section>
            <section className="about">
                <Container>
                    <Row>
                        <Col lg={6} className="align-self-center">
                            <div className="w-100">
                                <img src="image/about-img.png" className="img-fluid" />
                                <img src="image/about-img2.png" className="img-fluid about-img2" />
                            </div>
                        </Col>
                        <Col lg={6} className="align-self-center">
                            <div className="w-100 about-content">
                                <h2>Welcome to<br />
                                    <em>Echooling LMS Platform</em>
                                </h2>
                                <p>
                                    Education is both the act of teaching knowledge to others and <br />
                                    the act of receiving knowledge from someone else.
                                </p>
                                <p className="about-p">
                                    Have questions?
                                    <a href="#">Get Free Guide</a>
                                </p>
                                <p className="about-para">
                                    Education also refers to the knowledge received through schooling instruction <br />
                                    and to the institution of teaching as a whole. The main purpose of education
                                </p>
                                <ul className="list-unstyled">
                                    <li className="read">
                                        <a href="#" className="more-about">Read More
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <span>Get Support</span>
                                            <a href="#">support@react.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="campus-bg space100">
                <Container>
                    <div className="title text-center campus">
                        <h2>Campus Life</h2>
                        <img src="image/line.png" />
                    </div>
                    <Row>
                        <Col lg={7}>
                            <div className="w-100 cam-content">
                                <ul>
                                    <li className="d-flex align-self-center border-0">
                                        <div className="cam-icon me-2">
                                            <img src="image/cam-1.svg" className="img-fluid" />
                                        </div>
                                        <div className="cam-text">
                                            <h4>Do More, Stress Less</h4>
                                            <p>
                                                Why I say old chap that is spiffing he legged <br />
                                                it in my flat easy peasy.
                                            </p>
                                        </div>
                                        <a href="#" className="align-self-center ms-auto">
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex align-self-center">
                                        <div className="cam-icon me-2">
                                            <img src="image/cam-2.svg" className="img-fluid" />
                                        </div>
                                        <div className="cam-text">
                                            <h4>The Business Intelligence</h4>
                                            <p>
                                                Why I say old chap that is spiffing he legged <br />
                                                it in my flat easy peasy.
                                            </p>
                                        </div>
                                        <a href="#" className="align-self-center ms-auto">
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex align-self-center">
                                        <div className="cam-icon me-2">
                                            <img src="image/cam-3.svg" className="img-fluid" />
                                        </div>
                                        <div className="cam-text">
                                            <h4>System Administration</h4>
                                            <p>
                                                Why I say old chap that is spiffing he legged <br />
                                                it in my flat easy peasy.
                                            </p>
                                        </div>
                                        <a href="#" className="align-self-center ms-auto">
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="w-100">
                                <img src="image/campus-img.png" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center">
                        <a href="#" className="more-about mt-5">More about Campus Life
                            <i className="ms-2 fas fa-arrow-right"></i>
                        </a>
                    </div>
                </Container>
            </section>
            <section>
                <Container className="space100">
                    <div className="title text-center">
                        <h2>Popular Courses</h2>
                        <img src="image/line.png" />
                    </div>
                    <Row>
                        {
                            courses.map((course, index) => {
                                return <CourseSection key={index} item={course} />
                            })
                        }
                    </Row>
                    <div className="text-center">
                        <a href="#" className="more-about mt-5">View all Course
                            <i className="ms-2 fas fa-arrow-right"></i>
                        </a>
                    </div>
                </Container>
            </section>

            <section className="space100">
                <Container className="count-no">
                    <Row>
                        {
                            count.map((count, index) => {
                                return <CountSection key={index} item={count} />
                            })
                        }
                    </Row>
                </Container>
            </section>

            <section className="blog-bg">
                <div className="container space100">
                    <div className="title text-center">
                        <h2>What our student saying</h2>
                        <img src="image/line.png" />
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="w-100">
                                <div className="blog-card bg-white">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src="image/blog-1.jpg" className="img-fluid" />
                                        </a>
                                        <em className="blog-date">April 12</em>
                                    </div>
                                    <div className="blog-content">
                                        <span>Campaigns</span>
                                        <h3>Fostering future Schools & social Innovation</h3>
                                        <div className="blog-icon d-flex">
                                            <i className="fas fa-user"></i>
                                            <p>Nerte Gronw</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="w-100">
                                <div className="blog-card bg-white">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src="image/blog-2.jpg" className="img-fluid" />
                                        </a>
                                        <em className="blog-date">April 18</em>
                                    </div>
                                    <div className="blog-content">
                                        <span>Education</span>
                                        <h3>The Surprising Reason CollegeTuition</h3>
                                        <div className="blog-icon d-flex">
                                            <i className="fas fa-user"></i>
                                            <p>Charlie Doyle</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="w-100">
                                <div className="blog-card bg-white">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src="image/blog-3.jpg" className="img-fluid" />
                                        </a>
                                        <em className="blog-date">June 16</em>
                                    </div>
                                    <div className="blog-content">
                                        <span>Students</span>
                                        <h3>Those other College Expenses about</h3>
                                        <div className="blog-icon d-flex">
                                            <i className="fas fa-user"></i>
                                            <p>Owen Christ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="w-100">
                                <div className="blog-card bg-white">
                                    <div className="blog-img">
                                        <a href="#">
                                            <img src="image/blog-3.jpg" className="img-fluid" />
                                        </a>
                                        <em className="blog-date">May 22</em>
                                    </div>
                                    <div className="blog-content">
                                        <span>Strategy</span>
                                        <h3>Those other College Expenses about</h3>
                                        <div className="blog-icon d-flex">
                                            <i className="fas fa-user"></i>
                                            <p>Owen Christ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;