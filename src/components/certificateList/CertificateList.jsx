import "./certificateList.css"
import Certificate from "../certificate/Certificate"
import {certificates} from "../../certificatedata"

const CertificateList = () => {
    return (
        <div className="cl">
            <div className="cl-texts">
                <h1 className="cl-title">Certificates</h1>
                <p className="cl-desc">
                    A group of certificates for completing online courses on 
                    Coursera, Udemy, NPTEL and Python Institute
                </p>
            </div>
            <div className="cl-list">
                {certificates.map((item) => (
                    <Certificate key={item.id} img={item.img} name={item.name}/>
                ))}
            </div>
        </div>
    )
}

export default CertificateList