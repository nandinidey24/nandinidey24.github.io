import "./internship.css"

function Project (props) {
    return (
        <div className="int">
            <div className="int-card">
                <img className="int-img" src={props.img} alt=""/>
                <div className="int-intro">
                    <h2 className="int-title">{props.title}</h2>
                    <p className="int-desc">{props.desc}</p>
                    <div className="int-link-wrapper">
                        <button className="int-btn"><a className="int-link" href={props.link} target="blank">View</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project