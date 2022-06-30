import "./toggle.css"
import Light from "../../img/sun.gif"
import Dark from "../../img/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <img src={Light} alt="" className="t-icon" />
            <img src={Dark} alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 30 }}></div>
        </div>
    )
}

export default Toggle