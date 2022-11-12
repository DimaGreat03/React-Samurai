import s from "./users.module.css";
import userPhoto from "../assets/image/ars.jpeg";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserAPI} from "../Api/userAPI";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p && s.selectedPage}
                               onClick={() => {
                                   props.onPageChanged(p)
                               }}>{p}</button>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.photo}/>
                        </NavLink>
                    </div>

                    <div>
                        {u.followed
                            ? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollowThunk(u.id)
                            }} className={s.unfollow}> Отписаться </button>

                            : <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                props.followThunk(u.id)
                            }}> Подписаться </button>
                        }
                    </div>
                </div>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                      {/*  <div>{u.location.city}</div>
                        <div>{u.location.country}</div>*/}
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users