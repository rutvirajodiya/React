import React from "react";
import { Col } from "react-bootstrap";

function AcademicsSection(Props) {
    const { item } = Props;
    return (
        <>
            <Col lg={3} md={6}>
                <div className="w-100">
                    <div className="service">
                        <img src={item.img} className="img-fluid" />
                        <div className="service-content">
                            <h3>{item.name}</h3>
                            <a href="#">Learn More</a>
                            <i className="ms-2 fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default AcademicsSection;