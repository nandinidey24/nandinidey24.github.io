import "./certificate.css"

function Certificate (props) {
    return (
        <div className="c">
            <img src={props.img} alt={props.name} className="c-img"/>
            <div id="imgModal" className="c-modal">
                <span className="close">&times;</span>
                <img className="c-modal-content" alt=""/>
                <div id="caption"></div>
            </div>
        </div>
    )
}

export default Certificate