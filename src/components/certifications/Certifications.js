import Slider from 'react-slick';
import { Images } from "@/assets/assets";
import Image from "next/image";

const Certifications = () => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 3000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <section className="our-certifications">
            <div className="container-fluid container-width">
                <div className="our-certifications">
                    <h3 className="mb-0">Our Certifications</h3>
                </div>
               
                <div className="certification-slider">
                <Slider {...settings}>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.infosecLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.cisspLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.cehLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.awsImg} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.burpsuiteLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.pentesterlabLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.offensiveLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.eLearnLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.infosecLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.cisspLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.cehLogo} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    <div className="certification-slider-item">
                        <div className="certification-slider-item-img">
                            <Image src={Images.awsImg} className="img-fluid" alt="certification logo" />
                        </div>
                    </div>
                    </Slider>
                </div>
              
            </div>
        </section>
    )
}

export default Certifications