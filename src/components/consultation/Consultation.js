import Image from "next/image"
import { Images } from "@/assets/assets"

const Consultation = () => {
    return (
        <section className="free-consultation container-fluid container-width">
            <div className="row">
                <div className="col-lg-3 mb-lg-0 mb-4">
                    <div className="free-consultation-img">
                        <Image src={Images.freeConsultation} className="img-fluid" alt="free consultation img" />
                    </div>
                </div>
                <div className="col-lg-9">
                    <form className="free-consultation-form">
                        <h4>Order a free consultation</h4>
                        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-sm-4 mb-3">
                            <div className="input-wrapper mb-sm-0 mb-3">
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Enter the address of your
                                    website</label>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                            </div>
                        </div>
                        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between">
                            <div className="input-wrapper mb-sm-0 mb-3">
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Your name</label>
                            </div>
                            <div className="input-wrapper">
                                <input type="email" className="form-control" id="exampleFormControlInput1" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Your email</label>
                            </div>
                        </div>
                        <div className="checkbox-area d-flex align-items-center justify-content-between">
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label ms-3" htmlFor="flexCheckDefault">
                                    By submitting, I confirm agreement with the Privacy policy.
                                </label>
                            </div>
                            <button className="btn-white">GET THE CONSULTATION</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Consultation