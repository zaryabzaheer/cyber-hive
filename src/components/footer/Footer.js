import Image from 'next/image'
import { Images } from '@/assets/assets'
const Footer = () => {
    return (
        <footer className="footer position-relative">
            <div className="container-fluid container-width">
                <div className="footer-content d-flex justify-content-between">
                    <div className="footer-content-logo-info d-flex align-items-lg-end align-items-center">
                        <a href="/" className="logo me-lg-4 me-0">
                            <Image src={Images.logo} className="img-fluid" alt="footer logo" />
                        </a>
                    </div>
                    <div className="footer-privacy-info d-flex align-items-center">
                        <span>Cookie policy</span>
                        <span>Privacy policy</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer