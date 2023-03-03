import React from "react";
import { Container, Row } from "react-bootstrap";

function BannerSection(props) {
    return (
        <>
            <section className="grid">
                <Container className="space100 text-white text-center">
                    <Row>
                        <h2 classNameName="text-center">{props.title}</h2>
                        <ul className="d-flex justify-content-center m-0">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                Coureses Grid
                            </li>
                        </ul>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BannerSection;