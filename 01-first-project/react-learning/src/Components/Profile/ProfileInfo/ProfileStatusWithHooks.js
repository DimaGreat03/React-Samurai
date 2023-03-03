import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"


const ProfileStatusWithHooks = ({status, updateStatusThunk, param, userId,}) => {


    let [editMode, setEditMode] = useState(false)
    let [userStatus, setStatus] = useState(status)

    useEffect(() => {
        setStatus(status)
    }, [status])

    let activateMode = () => {
        setEditMode(true)
    }

    let deactivateMode = () => {
        setEditMode(false)
        updateStatusThunk(userStatus)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    if (param.userId === userId) {
        return <div>
            {!editMode &&
                <div className={s.statusUp}>
                    <span onDoubleClick={activateMode} className={s.status}>{status || 'no status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus onBlur={deactivateMode} onChange={onStatusChange} value={userStatus}/>
                </div>
            }
        </div>
    } else {
        return <div>
            {status || 'no status'}
        </div>
    }
}

export default ProfileStatusWithHooks;