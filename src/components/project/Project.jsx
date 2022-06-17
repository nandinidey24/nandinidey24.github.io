import "./project.css"

function Project (props) {
    return (
        <div className="p">
            <div className="p-card">
                <img className="p-img" src={props.img} alt=""/>
                <div className="p-intro">
                    <h2 className="p-title">{props.title}</h2>
                    <p className="p-desc">{props.desc}</p>
                    <div className="p-link-wrapper">
                        <button className="p-btn"><a className="p-link" href={props.link} target="blank">View</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project