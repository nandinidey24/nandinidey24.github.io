import "./projectList.css"
import Product from "../project/Project"

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
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default ProjectList