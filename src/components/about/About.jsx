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
                <p className="a-desc">
                    Born and brought up in Mumbai, I have completed my Bachelors of Technology 
                    in Electronics and Telecommunication from K. J. Somaiya College of Engineering in
                    2022. Throughout these years, the domain of Web development has intrigued me and 
                    so I have pursued various projects and internships in this domain. Apart from this,
                    I'm also interested in database management and have tried to gain more knowledge about
                    it via online courses. On a more personal note, I am a curious person and I love to read.
                    So googling about topics be it history, scientific facts, art or even my favorite shows
                    is one of my greatest hobbies. Through my Medium blogs I love to share my point of view
                    on various topics. I'm also a great music enthusiast. I've trained in Hindustani Classical
                    Music for 5 years but my love for music knows no boundaries, quite literally. In my spare
                    time, you'd find me reading novels, painting landscapes or binge watching K-dramas.  
                </p>
                <p className="a-sub">
                    Check out my blogs and follow me on Medium:
                </p>
                <button className="a-btn"><a href="https://medium.com/@nandinisdey" className="a-link-medium" target="blank">Visit profile on Medium</a></button>
            </div>
        </div>
    )
}

export default About