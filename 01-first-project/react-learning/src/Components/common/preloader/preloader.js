import s from "../../Users/users.module.css";
import React from "react";
import preloader from "../../assets/image/preloader.gif"

let Preloader = (props) => {

    return <div className={s.loader}>

            <img width="150px" src={preloader}/>

    </div>
}

export default Preloader;