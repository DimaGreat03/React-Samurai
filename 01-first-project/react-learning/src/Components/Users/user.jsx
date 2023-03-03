import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../assets/image/ars.jpeg";
import s from "./users.module.css";


const User = ({user, followingIsProgress, followThunk, unfollowThunk,}) => {
    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={s.photo}/>
                    </NavLink>
                </div>

                <div>
                    {user.followed
                        ? <button disabled={followingIsProgress.some(id => id === user.id)} onClick={() => {
                            unfollowThunk(user.id)
                        }} className={s.unfollow}> Отписаться </button>

                        : <button disabled={followingIsProgress.some(id => id === user.id)} onClick={() => {
                            followThunk(user.id)
                        }}> Подписаться </button>
                    }
                </div>
            </div>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
        </div>

    )
}


export default User;