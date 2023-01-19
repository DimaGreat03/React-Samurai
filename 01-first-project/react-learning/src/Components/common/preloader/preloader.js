import s from "../../Users/users.module.css";
import React from "react";
import preloader from "../../assets/image/preloader.gif"
import {connect} from "react-redux";
import {initialAppThunk} from "../../Redux/app-reducer";

class Preloader extends React.Component {

    componentDidMount() {
        this.props.initialAppThunk()
    }

    render() {

        return <div className={s.loader}>

            <img width="150px" src={preloader}/>

        </div>
    }
}

export default connect(null, {initialAppThunk,} )(Preloader)