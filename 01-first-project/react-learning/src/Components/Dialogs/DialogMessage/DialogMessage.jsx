const DialogMessage = (props) => {
    return (
        <div>
            {props.message}
            {props.textarea}
            <div> {props.button} </div>
        </div>
    )
}

export default DialogMessage