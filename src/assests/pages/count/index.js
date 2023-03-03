import React from "react";
import { Col } from "react-bootstrap";

function CountSection(Props) {
    const { item } = Props;
    return (
        <>
            <Col md={3} sm={6} className="col-12 border-right">
                <div className="w-100 count-content text-center text-white">
                    <p className="count-para">
                       {item.heading} 
                    </p>
                    <h3>{item.number}</h3>
                    <p className="text-uppercase">{item.description}</p>
                </div>
            </Col>
        </>
    )
}

export default CountSection;