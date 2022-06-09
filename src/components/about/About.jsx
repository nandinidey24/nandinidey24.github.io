import "./about.css"
import AboutImg from "../../img/about.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={AboutImg} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
                    consectetur, adipisci velit
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Aenean eget dui felis. 
                    Vestibulum non nibh a ante tristique accumsan. Interdum 
                    et malesuada fames ac ante ipsum primis in faucibus. Vestibulum 
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Sed ut ante quis mi imperdiet ultrices tincidunt sed ex. Vivamus ipsum purus, 
                    malesuada at aliquam ut, facilisis at libero. Donec molestie finibus massa eget 
                    condimentum. Donec rhoncus urna sed quam laoreet, ac rutrum neque fringilla.
                </p>
            </div>
        </div>
    )
}

export default About