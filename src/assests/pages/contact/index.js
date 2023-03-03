import BannerSection from "../banner";

function ContactPage() {
    return (
        <>
            <BannerSection title="Contact Us"/>

            <section>
                <div className="container space100">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="w-100">
                                <ul className="address">
                                    <li className="d-flex">
                                        <div className="icon">
                                            <img src="image/address.png"/>
                                        </div>
                                        <div className="text">
                                            <h3>Address</h3>
                                            <p> 1800 Abbot Kinney Blvd. Unit D <br/>
                                                & E Venice
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="icon">
                                            <img src="image/contact.png"/>
                                        </div>
                                        <div className="text">
                                            <h3>Contact</h3>
                                            <p>Mobile: (+88) - 1990 - 6886<br/>
                                                Mail: contact@echooling.com
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="icon">
                                            <img src="image/calendar.png"/>
                                        </div>
                                        <div className="text">
                                            <h3>Hours of Operation</h3>
                                            <p> Monday - Friday: 09:00 - 20:00 <br/>
                                                Sunday & Junday: 10:30 - 22:00
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="w-100 contact-form">
                                <h2>Questions? <br/>
                                    Feel free to contact uo.
                                </h2>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="w-100">
                                                <input type="text" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="w-100">
                                                <input type="email" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="w-100">
                                                <input type="text" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="w-100">
                                                <input type="number" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="w-100">
                                                <textarea name="message" placeholder="Message" cols="50" rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit">
                                        Send Message
                                        <i className="ms-2 fas fa-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                        <img src="image/map.jpg" className="img-fluid"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage;