import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Nandini Dey</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Coding Enthusiast</div>
                            <div className="i-title-item">Analyst</div>
                            <div className="i-title-item">Blogger</div>   
                        </div>
                    </div>
                    <p className="i-desc">
                        I have recently graduated from K J Somaiya College of Engineering
                         and about to join Deloitte USI as an Analyst. I enjoy writing blogs 
                         on topics I love to read about!
                    </p> 
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="Nandini Dey" className="i-img" />
            </div>
        </div>
    )
}

export default Intro