import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"


const ProfileStatusWithHooks = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateMode = () => {
        setEditMode(true)
    }

    let deactivateMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return <div>
        {!editMode &&
            <div className={s.statusUp}>
                <span onDoubleClick={activateMode} className={s.status}>{props.status || 'no status'}</span>
            </div>
        }
        {editMode &&
            <div>
                <input autoFocus onBlur={deactivateMode} onChange={onStatusChange} value={status}/>
            </div>
        }
    </div>
}


export default ProfileStatusWithHooks;