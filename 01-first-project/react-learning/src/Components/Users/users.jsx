import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./user";


const Users = ({
                   totalUsersCount, pageSize, currentPage, onPageChanged,
                   users, followingIsProgress, followThunk, unfollowThunk
               }) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                   currentPage={currentPage} onPageChanged={onPageChanged}/>
        {
            users.map(u => <User user={u} key={u.id} followingIsProgress={followingIsProgress}
                                 followThunk={followThunk} unfollowThunk={unfollowThunk}/>)
        }
        {/*{
            users.map(u => <div key={u.id}>
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
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }*/}
    </div>
}


export default Users