import "./certificate.css"

function Certificate (props) {
    return (
        <div className="c">
            <img src={props.img} alt={props.name} className="c-img"/>
        </div>
    )
}

export default Certificate