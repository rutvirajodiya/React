import React from "react";
import { Col } from "react-bootstrap";

function CourseSection(Props){
    const { item } = Props;
    return (
        <>
            <Col lg={3} md={6}>
                            <div className="w-100">
                                <div className="course">
                                    <div className="course-img">
                                        <img src={item.img} className="img-fluid" />
                                    </div>
                                    <div className="course-content">
                                        <ul className="d-flex text-center">
                                            <li>
                                                {item.list1}
                                            </li>
                                            <li>
                                                {item.list2}
                                            </li>
                                        </ul>
                                        <h4>
                                            {item.heading}
                                        </h4>
                                        <div className="student d-flex">
                                            <i className="fas fa-user-friends"></i>
                                            <p>{item.students}</p>
                                            <span className="ms-auto">{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
        </>
    )
}

export default CourseSection;