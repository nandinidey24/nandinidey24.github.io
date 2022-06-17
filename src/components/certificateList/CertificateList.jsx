import "./certificateList.css"
import Certificate from "../certificate/Certificate"
import {certificates} from "../../certificatedata"

const CertificateList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">CertificateList title</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Aenean eget dui felis. Vestibulum non nibh a ante 
                    tristique accumsan. Interdum et malesuada fames ac ante 
                    ipsum primis in faucibus.
                </p>
            </div>
            <div className="pl-list">
                {certificates.map((item) => (
                    <Certificate key={item.id} img={item.img} name={item.name}/>
                ))}
            </div>
        </div>
    )
}

export default CertificateList