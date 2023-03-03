import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

function LoginPage() {
    return (
        <>
            <section className="login-bg">
                <Container className="space100">
                    <Row>
                        <Col>
                            <div className="w-100">
                                <div className="login-form">
                                    <form>
                                        <div className="form-head text-center">
                                            <h3>Login</h3>
                                            <p>Don't have an account yet?
                                                <a>Sign up for free</a>
                                            </p>
                                        </div>
                                        <p>
                                            <label>Email</label>
                                            <input type="email" placeholder="Email"/>
                                        </p>
                                        <p>
                                            <label>Password</label>
                                            <input type="password" placeholder="Password"/>
                                        </p>
                                        <div className="check-box">
                                                <p className="ms-auto">Forget password?</p>
                                        </div>
                                        <button type="submit">
                                            LogIn
                                            <i className="ms-2 fas fa-arrow-right"></i>
                                        </button>
                                        <span> ........ or Login with ........ </span>
                                        <ul className="row p-0">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default LoginPage;