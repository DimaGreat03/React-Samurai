import s from "./users.module.css"


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{id: 1, photoUrl: "https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg" ,followed: true, name: 'Dima', status: 'I am a boss', location: {city: 'Ulan-Ude', country: 'Russia'}},
            {id: 2, followed: false, name: 'Polina', status: 'I am virgin', location: {city: 'Irkutsk', country: 'Russia'}},
            {id: 3, followed: true, name: 'Eranga', status: 'I am angry', location: {city: 'Ulan-Ude', country: 'Russia'}},
            {id: 4, followed: false, name: 'Kalash', status: 'I am dirty', location: {city: 'Chita', country: 'Russia'}}] )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                      <div>
                         <img src={u.photoUrl} className={s.photo}/>
                      </div>
                      <div>
                          {u.followed
                              ? <button onClick={() => {props.unfollow(u.id)}}> Unfollow </button>
                              : <button onClick={() => {props.follows(u.id)}}> Follow </button>
                          }
                      </div>
                </span>
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
        }
    </div>
}

export default Users;