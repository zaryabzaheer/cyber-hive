'use client'
import { Images } from "@/assets/assets"
import Image from "next/image"
import Lottie from 'react-lottie';
import bannerLottie from '../../assets/lottie/banner.json'

const Banner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bannerLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <section className="banner" id="home-banner">
            <div className="container-width">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-first order-last">
                        <div className="banner-content position-relative">
                            <div className="banner-content-lottie">
                            <Lottie
                                    className="phone-lottie-img"
                                    options={defaultOptions}
                                />
                            </div>
                            <span className="d-block reliable-content position-relative">Comfortable</span>
                            <strong className="d-block position-relative">Protected</strong>
                            <h1 className="position-relative">Website</h1>
                            <p className="position-relative">We guarantee protection from 99% of external threats.</p>
                            <p className="position-relative banner-p">Pentest, protection against DDoS attacks, site hacking and data
                                loss. Treatment and diagnosis of sites.</p>
                            <button className="btn-filled position-relative"><span>FREE CONSULTATION</span></button>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-last order-first">
                        <div className="banner-img">
                            <Image src={Images.bannerCol}alt="banner img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner