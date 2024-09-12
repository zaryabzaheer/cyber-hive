'use client'
import Image from "next/image"
import { Images } from "@/assets/assets";
import Lottie from 'react-lottie';
import serviceSetting from '../../assets/lottie/setting.json'
import serviceLottie from '../../assets/lottie/service.json'
import contractLottie from '../../assets/lottie/contract.json'
import securityLottie from '../../assets/lottie/security.json'

const Service = () => {
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: serviceSetting,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: serviceLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: contractLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: securityLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <section className="services">
            <div className="container-fluid container-width">
                <div className="services-heading" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <h3 className="mb-0">Our services</h3>
                </div>
                <div className="services-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="services-box-img-wrapper-one position-relative">
                                <div className="services-box-img">
                                    <Image src={Images.treatmentRecovery} alt="treatment recovery"
                                        className="img-fluid" />
                                </div>
                                <div className="service-setting-lottie">
                                    <Lottie
                                        className="phone-lottie-img"
                                        options={defaultOptions2}
                                    // width={80}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="services-box-content">
                                <h4>Treatment and recovery</h4>
                                <p>Quickly detect and eliminate all vulnerabilities. Investigate an infection or
                                    hacking</p>
                                <div className="services-box-content-buttons d-flex flex-sm-row flex-column align-items-center">
                                    <button className="btn-filled me-sm-3 mb-sm-0 mb-3"><span>ORDER NOW</span></button>
                                    <button className="btn-transparent">MORE DETAIL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                    <div className="row align-items-center">
                        <div className="col-lg-8 mb-lg-0 mb-4 order-lg-first order-last">
                            <div className="services-box-content">
                                <h4>Security code review</h4>
                                <p>Security code review is effective technique for identifying security bugs on the
                                    early stages of development.</p>
                                <div className="services-box-content-buttons d-flex flex-sm-row flex-column align-items-center">
                                    <button className="btn-filled me-sm-3 mb-sm-0 mb-3"><span>ORDER NOW</span></button>
                                    <button className="btn-transparent">MORE DETAIL</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-last order-first mb-lg-0 mb-4">
                            <div className="services-box-img-wrapper-one position-relative">
                                <div className="services-box-img">
                                    <Image src={Images.securityReview} alt="security review" className="img-fluid" />
                                </div>
                                <div className="security-review-lottie">
                                    <Lottie
                                        className="security-review-lottie-img"
                                        options={defaultOptions4}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="smart-contract-lottie">
                                     <Lottie
                                    className="smart-contract-lottie-img"
                                        options={defaultOptions3}
                                    />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="services-box-content">
                                <h4>Smart contract audit</h4>
                                <p>Smart Contract Audit is a process of examining a piece of code to identify bugs,
                                    vulnerabilities, and risks.</p>
                                <div className="services-box-content-buttons d-flex flex-sm-row flex-column align-items-center">
                                    <button className="btn-filled me-sm-3 mb-sm-0 mb-3"><span>ORDER NOW</span></button>
                                    <button className="btn-transparent">MORE DETAIL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-box mb-0">
                    <div className="row align-items-center">
                        <div className="col-lg-8 mb-lg-0 mb-4 order-lg-first order-last">
                            <div className="services-box-content">
                                <h4>Monitoring and protection 24/7</h4>
                                <p>24-hour-a-day, Round-the-clock monitoring of website security, accessibility and
                                    efficiency.</p>
                                <div className="services-box-content-buttons d-flex flex-sm-row flex-column align-items-center">
                                    <button className="btn-filled me-sm-3 mb-sm-0 mb-3"><span>ORDER NOW</span></button>
                                    <button className="btn-transparent">MORE DETAIL</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-last order-first mb-lg-0 mb-4">
                            <div className="services-box-img-wrapper-one position-relative">
                                <div className="services-box-img">
                                    <Image src={Images.monitioringProtection} alt="monitoring protection"
                                        className="img-fluid" />
                                </div>
                                <div className="service-setting-lottie">
                                          <Lottie
                                    className="service-setting-lottie-img"
                                        options={defaultOptions1}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service