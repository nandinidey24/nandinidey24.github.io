import "./projectList.css"
import Product from "../project/Project"
import Alumnet from "../../img/Alumnet.jpeg"
import MPMC from "../../img/mpmcproj.png"

const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">This is ProjectList title</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Aenean eget dui felis. Vestibulum non nibh a ante 
                    tristique accumsan. Interdum et malesuada fames ac ante 
                    ipsum primis in faucibus.
                </p>
            </div>
            <div className="pl-list">
                <Product 
                    img={Alumnet}
                    title="AlumNet"
                    desc="A social media connection website for Alumni and Students using Django 
                    framework, Bootstrap, JQuery, AJAX, Django channels and Websockets"
                    link="https://github.com/nandinidey24/MiniProject"
                />
                <Product 
                    img={MPMC}
                    title="Password Security Lock using 8051 microprocessor"
                    desc="A Password lock system hardware circuit by
                        Interfacing 8051 microprocessor with 16x2 LCD and 4x4 Matrix Keyboard"
                    link="https://github.com/nandinidey24/MiniProject"
                />
            </div>
        </div>
    )
}

export default ProjectList