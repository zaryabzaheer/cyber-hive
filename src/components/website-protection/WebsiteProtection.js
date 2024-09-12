import { Images } from '@/assets/assets'
import Image from 'next/image'

const WebsiteProtection = () => {
    return (
        <section className="website-protection">
            <div className="container-fluid container-width">
                <div className="website-protection-heading text-center position-relative">
                    <h2>Your website needs</h2>
                    <span>PROTECTION</span>
                    <div className="website-protection-guard-img">
                        <Image src={Images.protectionGuard} className="img-fluid" alt="protection guard icon" />
                    </div>
                </div>
                <div className="website-protection-content">
                    <h3>No less, than a physical store or warehouse</h3>
                    <p>To protect your website is like to set an alarm and to lock a physical store or to hire a
                        security guard to protect your business from intruders</p>
                    <button className="btn-filled"><span>GET FREE CONSULTANCY</span></button>
                </div>
            </div>
        </section>
    )
}

export default WebsiteProtection