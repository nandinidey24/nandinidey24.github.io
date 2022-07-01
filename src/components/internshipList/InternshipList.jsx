import "./internshipList.css"
import Internship from "../internship/Internship"
import VLABEyeDiag from "../../img/Internships/vlabeyediagram.png"
import VLABHuffman from "../../img/Internships/vlabhuffmancoding.png"
import Edutronics from "../../img/Internships/edutronics.png"
import SVUFrontend from "../../img/Internships/svufrontend.jpg"
import ElectricLocoShed from "../../img/Internships/electriclocoshed.jpg"

const InternshipList = () => {
    return (
        <div className="intl">
            <div className="intl-texts">
                <h1 className="intl-title">This is InternshipList title</h1>
                <p className="intl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Aenean eget dui felis. Vestibulum non nibh a ante 
                    tristique accumsan. Interdum et malesuada fames ac ante 
                    ipsum primis in faucibus.
                </p>
            </div>
            <div className="intl-list">    
                <Internship 
                    img={VLABEyeDiag}
                    title="Eye Diagram Virtual Lab Development"
                    desc="A Password lock system hardware circuit by
                        Interfacing 8051 microprocessor with 16x2 LCD and 4x4 Matrix Keyboard"
                    link="https://kjsce-vlabyediagram.herokuapp.com/"
                />
                <Internship 
                    img={VLABHuffman}
                    title="Huffman Coding Virtual Lab Development"
                    desc="A Password lock system hardware circuit by
                        Interfacing 8051 microprocessor with 16x2 LCD and 4x4 Matrix Keyboard"
                    link="https://vlabhuffman-kjsce.herokuapp.com/"
                />
                <Internship 
                    img={Edutronics}
                    title="EduTronics"
                    desc="A Password lock system hardware circuit by
                        Interfacing 8051 microprocessor with 16x2 LCD and 4x4 Matrix Keyboard"
                    link="http://edutronics.herokuapp.com/"
                />
                <Internship 
                    img={SVUFrontend}
                    title="Frontend Development for SVU"
                    desc="A Password lock system hardware circuit by
                        Interfacing 8051 microprocessor with 16x2 LCD and 4x4 Matrix Keyboard"
                    link="https://github.com/nandinidey24/MiniProject"
                />
                <Internship 
                    img={ElectricLocoShed}
                    title="Trainee at Electric Loco Shed, Kalyan"
                    desc="A Password lock system hardware circuit by
                        Interfacing 8051 microprocessor with 16x2 LCD and 4x4 Matrix Keyboard"
                    link="https://github.com/nandinidey24/MiniProject"
                />
            </div>
        </div>
    )
}

export default InternshipList