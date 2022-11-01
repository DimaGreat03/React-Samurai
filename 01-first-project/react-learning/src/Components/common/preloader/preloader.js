import s from "../../Users/users.module.css";
import React from "react";
import preloader from "../../assets/image/ars.png"

let Preloader = (props) => {

    return <div className={s.loader}>

            <img width="350px" src={preloader}/>

    </div>
}

export default Preloader;