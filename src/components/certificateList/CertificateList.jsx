import "./certificateList.css"
import Certificate from "../certificate/Certificate"

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
                <Certificate>Certif1</Certificate>
            </div>
        </div>
    )
}

export default CertificateList