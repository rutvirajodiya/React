import React from "react";
import { Container, Form, Nav, Navbar, Row, Col } from "react-bootstrap";

function Header(props) {
    return (
        <>
            <header className="navbar navbar-expand-lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="image/logo.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle className="shadow-none" type="button" aria-controls="basic-navbar-nav">
                        <i className="fas fa-bars"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mb-2 mb-lg-0 ms-auto align-self-center">
                            <li className="nav-item align-self-center">
                                <Nav.Link href="index.html" target="new">Home
                                </Nav.Link>
                            </li>
                            <li className="nav-item align-self-center">
                                <Nav.Link href="courses.html" target="new">Courses
                                </Nav.Link>
                            </li>
                            <li className="nav-item align-self-center">
                                <Nav.Link href="event.html" target="new">Events
                                </Nav.Link>
                            </li>
                            <li className="nav-item align-self-center">
                                <Nav.Link href="contact.html" target="new">Contact
                                </Nav.Link>
                            </li>
                            <li className="nav-item align-self-center">
                                <Nav.Link href="login.html" target="new">
                                    <i className="fas fa-user pe-2"></i>Log In
                                </Nav.Link>
                            </li>
                            <li className="input ">
                                <i className="fas fa-search"></i>
                                <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </header>

            {props.children}

            <footer className="bg-dark">
                <Container className="py-5">
                    <Row>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="w-100 text-white logo align-self-center">
                                <img src="image/footer-logo.png" className="img-fluid"/>
                                    <h5>There are course and event custom <br/>
                                        post types so you can easily create and <br/>
                                            manage course, events.
                                        </h5>
                                        <ul>
                                            <li className="mb-2">
                                                <i className="fas fa-phone-alt"></i>
                                                <a href="#">+(402) 762 441 83</a>
                                            </li>
                                            <li className="">
                                                <i className="fas fa-envelope"></i>
                                                <a href="#">info@echooling.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="w-100 text-white about-us align-self-center">
                                            <h3>About Us</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">About</a>
                                                </li>
                                                <li>
                                                    <a href="#">Courses</a>
                                                </li>
                                                <li>
                                                    <a href="#">Events</a>
                                                </li>
                                                <li>
                                                    <a href="#">Career</a>
                                                </li>
                                                <li>
                                                    <a href="#">Become a Teacher</a>
                                                </li>
                                                <li>
                                                    <a href="#">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="w-100 text-white about-us align-self-center">
                                            <h3>Useful Links</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">Browse Library</a>
                                                </li>
                                                <li>
                                                    <a href="#">Library</a>
                                                </li>
                                                <li>
                                                    <a href="#">Partners</a>
                                                </li>
                                                <li>
                                                    <a href="#">News & Blog</a>
                                                </li>
                                                <li>
                                                    <a href="#">Faq</a>
                                                </li>
                                                <li>
                                                    <a href="#">Tutorials</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="w-100 text-white newsletter">
                                            <h3>Newsletter</h3>
                                            <p>Get the latest Echooling news delivered to you inbox</p>
                                            <input type="email" placeholder="Enter Your email" />
                                            <button className="border-0">
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                            </Row>
                        </Container>
                        <Container className="text-white">
                            <div className="d-flex footer-copyright">
                                <div className="copyright align-self-center col-12 col-lg-6">
                                    <p>
                                        © 2022
                                        <a href="#">Echooling.</a>
                                        All Rights Reserved
                                    </p>
                                </div>
                                <div className="social ms-auto">
                                    <ul className="d-flex align-self-center col-12 col-lg-6">
                                        <li className="follow align-self-center">
                                            Follow us
                                        </li>
                                        <li>
                                            <a href="#" className="facebook align-self-center">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Container>
                    </footer>
                </>
                )
}

                export default Header;