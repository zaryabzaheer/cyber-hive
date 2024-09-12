import { Tab, Tabs } from 'react-bootstrap';
import Image from "next/image";
import { Images } from "@/assets/assets";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TenExamples = () => {
    const sliderSettings = {
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="ten-examples">
            <div className="container-fluid container-width">
                <div className="ten-examples-heading text-center mb-lg-5 mb-4">
                    <h2>10 examples</h2>
                    <h3 className="mb-0">of how a cybercriminal can harm your business</h3>
                </div>
                <Tabs defaultActiveKey="deletewebsite" id="uncontrolled-tab-example">
                    <Tab eventKey="deletewebsite" title="Delete website">
                        <Slider {...sliderSettings} className="tabs-slider">

                            <div className="tabs-slider-item">
                                <div className="tabs-slider-item-content">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 mb-lg-0 mb-5">
                                            <div className="tabs-slider-content-img">
                                                <Image src={Images.deleteWebsiteImg} className="img-fluid"
                                                    alt="tabs slider img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="tabs-slider-content">
                                                <h4>Delete website</h4>
                                                <p>To find the vulnerability and delete the website forever. Often
                                                    this
                                                    can be done by a 15-year-old guy who, after watching video
                                                    lessons
                                                    in the public domain decided to “have fun” and test his skills.
                                                    An
                                                    unprotected website becomes a victim of an under-hacker.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabs-slider-item">
                                <div className="tabs-slider-item-content">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 mb-lg-0 mb-5">
                                            <div className="tabs-slider-content-img">
                                                <Image src={Images.hackAdmin} className="img-fluid"
                                                    alt="tabs slider img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="tabs-slider-content">
                                                <h4>To hack admin panel</h4>
                                                <p>In the realm of cybersecurity, an admin panel is a crucial
                                                    component, serving as the control center for managing and
                                                    overseeing various system functionalities. The admin panel is a
                                                    prime target for cybercriminals, who seek unauthorized access to
                                                    exploit vulnerabilities, manipulate data, or disrupt operations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </Tab>
                    <Tab eventKey="hackadmin" title="Hack admin">
                        <p>Content for Hack admin tab</p>
                    </Tab>
                    <Tab eventKey="stealdatabase" title="Steal database">
                        <p>Content for Steal database tab</p>
                    </Tab>
                    <Tab eventKey="stealtraffic" title="Steal traffic">
                        <p>Content for Steal traffic tab</p>
                    </Tab>
                    <Tab eventKey="lowerserp" title="Lower in SERP">
                        <p>Content for Lower in SERP tab</p>
                    </Tab>
                    <Tab eventKey="hackpromotion" title="Hack promotions">
                        <p>Content for Hack promotions tab</p>
                    </Tab>
                    <Tab eventKey="stealdata" title="Steal card data">
                        <p>Content for Steal card data tab</p>
                    </Tab>
                    <Tab eventKey="encryptfiles" title="Encrypt files">
                        <p>Content for Encrypt files tab</p>
                    </Tab>
                    <Tab eventKey="stealserver" title="Steal server">
                        <p>Content for Steal server tab</p>
                    </Tab>
                    <Tab eventKey="massattack" title="Mass attack">
                        <p>Content for Mass attack tab</p>
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
};

export default TenExamples;
