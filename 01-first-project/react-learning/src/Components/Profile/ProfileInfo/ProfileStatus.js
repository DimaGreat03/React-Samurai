import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({editMode: true, status: this.props.status})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatusThunk(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        if (this.props.param.userId == this.props.userId) {
            return <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no sttus'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}
                               onChange={this.onStatusChange}/>
                    </div>
                }
            </div>
        } else {
            return (
                <div>
                    <span>{this.props.status}</span>
                </div>
            )
        }
    }
}

export default ProfileStatus