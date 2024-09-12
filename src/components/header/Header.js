'use client'
import Image from "next/image";
import { Images } from "@/assets/assets";
import pulseLottie from '../../assets/lottie/pulse.json';
import Lottie from 'react-lottie';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function BasicExample() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: pulseLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <header className="header">
            <div className="header-bg">
                <Navbar expand="lg" className="navbar navbar-expand-lg p-0">
                    <Container fluid className='container-width position-relative'>
                        <Navbar.Brand href="index.html">
                            <Image src={Images.logo} className="img-fluid" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <FontAwesomeIcon icon={faBarsStaggered}  className="header-bars-icon"/>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav" className="header-list-wrapper justify-content-between">
                            <ul className="navbar-nav mb-lg-0 header-list">
                                {/* <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">BLOG</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT US</a>
                                </li> */}
                            </ul>
                        </Navbar.Collapse>
                        <div className="header-social-area d-flex align-items-center">
                            <button className="btn-transparent">SHALL WE CALL YOU BACK?</button>
                            <a href="tel:123456789" className="phone-lottie">
                                <Lottie
                                    className="phone-lottie-img"
                                    options={defaultOptions}
                                    width={80}
                                />
                            </a>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}

export default BasicExample;
