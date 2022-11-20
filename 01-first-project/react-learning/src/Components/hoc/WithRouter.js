import {useParams} from "react-router-dom";


export const WithRouter = (Component) => {
    let WithRouterComponent = (props) => {
        return <Component {...props} param={useParams()}/>
    }
    return WithRouterComponent
}


