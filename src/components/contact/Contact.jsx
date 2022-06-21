import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"

const Contact = () => {
    return (
        <div className="ct">
            <div className="ct-bg"></div>
            <div className="ct-wrapper">
                <div className="ct-left">
                    <h1 className="ct-title">Let's discuss your project</h1>
                    <div className="ct-info">
                        <div className="ct-info-item">
                            <img src={Phone} alt="" className="ct-icon"/>+91 9819200968
                        </div>
                        <div className="ct-info-item">
                            <img src={Email} alt="" className="ct-icon"/>nandinisdey@gmail.com
                        </div>
                        <div className="ct-info-item">
                            <img src={Address} alt="" className="ct-icon"/>B-2/201, Mohan Regency, Adharwadi Road, Kalyan(W), Thane, Maharashtra, India
                        </div>
                    </div> 
                </div>
                <div className="ct-right">
                    <p className="ct-desc">
                        <b>What's your story?</b> Get in touch. Always open to collaborations if the right project comes along me.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="user_message" />
                        <button className="ct-btn">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact