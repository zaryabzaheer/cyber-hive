import Slider from 'react-slick';
import { Images } from "@/assets/assets";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviews = () => {
    const sliderSettings = {
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="customer-reviews">
            <div className="container-width container-fluid">
                <div className="customer-reviews-heading text-center position-relative">
                    <h3>Customers</h3>
                    <span>REVIEWS</span>
                    <div className="reviews-glasses-img">
                        <Image src={Images.reviewsGlasses} alt="reviews glasses" className="img-fluid" />
                    </div>
                </div>
                <Slider {...sliderSettings} className="customer-reviews-slider">
                    <div className="customer-reviews-slider-item">
                        <div className="customer-reviews-item-content">
                            <div className="customer-reviews-item-content-top-area">
                                <div className="customer-reviews-item-content-img">
                                    <Image src={Images.invictusImg} className="img-fluid" alt="invictus img" />
                                </div>
                                <p>It is my pleasure to strongly recommend DATAMI for all of your pentesting
                                    requirements. They conduct themselves in a professional manner and the
                                    engagement was quick and efficient.</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="/" className="btn-transparent">MORE DETAIL</a>
                            </div>
                        </div>
                    </div>
                    <div className="customer-reviews-slider-item">
                        <div className="customer-reviews-item-content">
                            <div className="customer-reviews-item-content-top-area">
                                <div className="customer-reviews-item-content-img">
                                    <Image src={Images.andromedaImg} className="img-fluid" alt="andromeda img" />
                                </div>
                                <p>I, Eugene Mediany CEO of Andr0meda, together with my entire team, would like to
                                    express my sincere gratitude to DATAMI for successfully analyzing the
                                    vulnerabilities of our projects.</p>
                                <p>Thank you for the promptness and high level of professionalism shown by you in
                                    our cooperation…</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="/" className="btn-transparent">MORE DETAIL</a>
                            </div>
                        </div>
                    </div>
                    <div className="customer-reviews-slider-item">
                        <div className="customer-reviews-item-content">
                            <div className="customer-reviews-item-content-top-area">
                                <div className="customer-reviews-item-content-img">
                                    <Image src={Images.deloitteImg} className="img-fluid" alt="deloitte img" />
                                </div>
                                <p>We would like to recommend the Datami Cyber-Security Company - the team of highly
                                    qualified, experienced, and certified ethical hackers. They can:</p>
                                <p>1) carry out regular penetration tests and IT audits: networks, OS, services and
                                    software, Wi-Fi, databases, mobile…</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="/" className="btn-transparent">MORE DETAIL</a>
                            </div>
                        </div>
                    </div>
                    <div className="customer-reviews-slider-item">
                        <div className="customer-reviews-item-content">
                            <div className="customer-reviews-item-content-top-area">
                                <div className="customer-reviews-item-content-img">
                                    <Image src={Images.invictusImg} className="img-fluid" alt="invictus img" />
                                </div>
                                <p>It is my pleasure to strongly recommend DATAMI for all of your pentesting
                                    requirements. They conduct themselves in a professional manner and the
                                    engagement was quick and efficient.</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="/" className="btn-transparent">MORE DETAIL</a>
                            </div>
                        </div>
                    </div>
                </Slider>

            </div>
        </section >
    )
}

export default CustomerReviews