import React from "react";
import userPhoto from "../assets/image/ars.jpeg";
import s from "./users.module.css";
import axios from "axios";







class Users extends React.Component {

    constructor(props) {
        super(props);
        alert('create object')
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                      <div>
                         <img src={u.photos.small !== null ? u.photos.small : userPhoto } className={s.photo}/>
                      </div>
                      <div>
                          {u.followed
                              ? <button onClick={() => {this.props.unfollow(u.id)}}> Unfollow </button>
                              : <button onClick={() => {this.props.follows(u.id)}}> Follow </button>
                          }
                      </div>
                </span>
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

}

export default Users;