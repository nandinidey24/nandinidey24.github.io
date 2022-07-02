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
                <h1 className="intl-title">Internships</h1>
                <p className="intl-desc">
                    Internal as well as external internships completed by me 
                    during the 4 years of Engineering
                </p>
            </div>
            <div className="intl-list">    
                <Internship 
                    img={VLABEyeDiag}
                    title="Eye Diagram Virtual Lab Development"
                    desc="Developed a virtual lab to explain the concepts of Eye diagrams in Digital Communication"
                    link="https://kjsce-vlabyediagram.herokuapp.com/"
                />
                <Internship 
                    img={VLABHuffman}
                    title="Huffman Coding Virtual Lab Development"
                    desc="Developed a virtual lab to explain the concepts of Huffman coding in Digital Communication"
                    link="https://vlabhuffman-kjsce.herokuapp.com/"
                />
                <Internship 
                    img={Edutronics}
                    title="EduTronics: Solutions to Electronics problems"
                    desc="Part of the backend team to develop a website to provide Textbook solutions for Electronics subjects"
                    link="http://edutronics.herokuapp.com/"
                />
                <Internship 
                    img={SVUFrontend}
                    title="Frontend Development for Somaiya Vidyavihar University"
                    desc="Part of the Frontend team for developing the SVU website"
                    link="https://drive.google.com/file/d/1ovSukMjm8Zy5lLhcvc_yTjLH6SPAHLj-/view?usp=sharing"
                />
                <Internship 
                    img={ElectricLocoShed}
                    title="Trainee at Electric Loco Shed, Kalyan"
                    desc="Interned as a trainee at the Electric Loco Shed, Kalyan of the Indian Railways"
                    link="#"
                />
            </div>
        </div>
    )
}

export default InternshipList